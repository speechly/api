# Javascript package for Speechly gRPC APIs and Protocol Buffers schemas

## Installation

```sh
# Using NPM
npm i --save @speechly/api

# Using Yarn
yarn add --save @speechly/api
```

## Usage

The generated code can be used with Javascript or TypeScript code, but it only works on platforms that support ES or CommonJS modules. Messages and services are located within their specific packages and in separate files.

```ts
import { Metadata } from "grpc";

// Messages are located in specific package directories.
import { ListAppsRequest } from "@speechly/api/speechly/config/v1/config_api_pb";

// Services are defined separately from messages.
import { ConfigAPIClient } from "@speechly/api/speechly/config/v1/config_api_pb_service";

// Create a client for Speechly Configuration API.
const client = new ConfigAPIClient("api.speechly.com");

// Set up metadata with authorization token.
const token = "my-api-token";
const md = new Metadata();
md.add("Authorization", `Bearer: ${token}`);

// Prepare the request for ListApps RPC.
const req = new ListAppsRequest();
req.setProject("11111111-1111-1111-1111-111111111111");

// Execute the RPC.
client.listApps(req, md, (err, res) => {
  if (err !== null) {
    console.error("Error listing apps:", err);
    return;
  }

  // If error was null, it means result is always present, hence `res!`.
  const apps = res!.getAppsList();

  console.log("Fetched", apps.length, "apps");
  apps.forEach((app) =>
    console.log("App details", app.getId(), app.getName(), app.getLanguage())
  );
});
```

## Updating the package

Generate the code and publish the package:

```sh
make build
npm publish
```
