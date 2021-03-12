import sys
import json


package_template = '''
# Services
{service_list}

# Messages
{message_list}
'''

service_template = '''
<a name="{fullName}"></a>
# {fullName}

{description}

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
{method_table}
'''

messages_template = '''
## Messages

{messages_toc}

{messages}
'''

message_template = '''
<a name="{fullName}"></a>
### {name}

{description}

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
{field_table}
'''

field_template = '''
| {name} | [{type}](#{fullType}) | {description} |
'''.strip()

method_template = '''
| {name} | [{request}](#{requestFullType}) | [{response}](#{responseFullType}) | {description} |
'''.strip()


def format_for_table(d):
    return d.replace('\n', '<br/>')


def service(s):
    method_table = '\n'.join([method_template.format(
        name=m['name'],
        request=m['requestLongType'] + (' stream' if m['requestStreaming'] else ''),
        requestFullType=m['requestFullType'],
        response=m['responseLongType'] + (' stream' if m['responseStreaming'] else ''),
        responseFullType=m['responseFullType'],
        description=format_for_table(m['description'])
    ) for m in s['methods']])
    return service_template.format(
        fullName=s['fullName'],
        description=s['description'],
        method_table=method_table,
    )


def message(m):
    field_table = '\n'.join([field_template.format(
        name=f['name'],
        type=f['type'],
        fullType=f['fullType'],
        description=format_for_table(f['description'])
    ) for f in m['fields']])
    return message_template.format(
        name=m['longName'],
        fullName=m['fullName'],
        description=m['description'],
        field_table=field_table
    )


if __name__ == '__main__':
    if len(sys.argv) != 2:
        raise Exception(f'Single JSON doc file required as parameter, got {sys.argv}')

    with open(sys.argv[1], 'r') as fp:
        doc = json.load(fp)

    packages = {}
    for f in doc['files']:
        p = packages.get(f['package'], {'services': [], 'messages': [], 'description': ''})
        if not p['description']:
            p['description'] = f['description']
        p['services'] += f['services']
        p['messages'] += f['messages']
        packages[f['package']] = p

    doc = ''
    for name, p in packages.items():
        if name in ['speechly.identity.v1']:
            continue
        doc += '\n'.join([service(s) for s in sorted(p['services'], key=lambda x: x['name'])])
        if p['messages']:
            messages = sorted(p['messages'], key=lambda x: x['name'])
            toc = '\n'.join(f'- [{m["name"]}](#{m["fullName"]})' for m in messages)
            msgs = '\n'.join(message(m) for m in messages)
            doc += messages_template.format(messages_toc=toc, messages=msgs)
    print(doc)
