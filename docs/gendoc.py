import sys
import json


service_template = """
# {fullName}

{description}

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
{method_table}
"""

messages_template = """
## Messages

{messages_toc}

{messages}
"""

message_template = """
### {name}

{description}

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
{field_table}
"""

enums_template = """
## Enums

{enums_toc}

{enums}
"""

enum_template = """
### {name}

{description}

#### Values

| name | value | description |
| ---- | ----- | ----------- |
{values_table}
"""

type_template = "[{type}](#{type})"

field_template = """
| {name} | {type} | {description} |
""".strip()

method_template = """
| {name} | [{request}](#{requestType}) | [{response}](#{responseType}) | {description} |
""".strip()


def format_for_table(d):
    return d.replace("\n", "<br/>")


def service(s):
    method_table = "\n".join(
        [
            method_template.format(
                name=m["name"],
                request=m["requestLongType"]
                + (" stream" if m["requestStreaming"] else ""),
                requestType=m["requestFullType"].replace(".", "").lower(),
                response=m["responseLongType"]
                + (" stream" if m["responseStreaming"] else ""),
                responseType=m["responseFullType"].replace(".", "").lower(),
                description=format_for_table(m["description"]),
            )
            for m in s["methods"]
        ]
    )
    return service_template.format(
        fullName=s["fullName"],
        description=s["description"],
        method_table=method_table,
    )


def is_scalar(f: dict) -> bool:
    return f["type"] in ["string", "int64", "bool"]


def message(m, scalars):
    field_table = "\n".join(
        [
            field_template.format(
                name=f["name"],
                type=f["type"]
                if f["type"] in scalars
                else f"[{f['type']}](#{f['fullType'].replace('.', '').lower()})",
                description=format_for_table(f["description"]),
            )
            for f in m["fields"]
        ]
    )
    return message_template.format(
        name=m["fullName"],
        fullName=m["fullName"],
        description=m["description"],
        field_table=field_table,
    )


def enum(e):
    values_table = "\n".join(
        [
            f'| {v["name"]} | {v["number"]} | {format_for_table(v["description"])} |'
            for v in e["values"]
        ]
    )
    return enum_template.format(
        name=e["fullName"],
        fullName=e["fullName"],
        description=e["description"],
        values_table=values_table,
    )


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise Exception(f"Single JSON doc file required as parameter, got {sys.argv}")

    with open(sys.argv[1], "r") as fp:
        doc = json.load(fp)

    packages = {}
    for f in doc["files"]:
        p = packages.get(
            f["package"],
            {"services": [], "messages": [], "enums": [], "description": ""},
        )
        if not p["description"]:
            p["description"] = f["description"]
        p["services"] += f["services"]
        p["messages"] += f["messages"]
        p["enums"] += f["enums"]
        packages[f["package"]] = p
    scalars = set(s["protoType"] for s in doc["scalarValueTypes"])
    doc = ""
    for name, p in packages.items():
        if name in ["speechly.identity.v1"]:
            continue
        doc += "\n".join(
            [service(s) for s in sorted(p["services"], key=lambda x: x["name"])]
        )
        if p["messages"]:
            messages = sorted(p["messages"], key=lambda x: x["longName"])
            toc = "\n".join(f'- [{m["longName"]}](#{m["fullName"]})' for m in messages)
            msgs = "\n".join(message(m, scalars) for m in messages)
            doc += messages_template.format(messages_toc=toc, messages=msgs)
        if p["enums"]:
            enums = sorted(p["enums"], key=lambda x: x["longName"])
            toc = "\n".join(f'- [{e["longName"]}](#{e["fullName"]})' for e in enums)
            es = "\n".join(enum(e) for e in enums)
            doc += enums_template.format(enums_toc=toc, enums=es)
    print(doc)
