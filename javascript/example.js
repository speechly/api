const { credentials, Metadata } = require("grpc");

const { ConfigAPIClient } = require("./speechly/config/v1/config_api_grpc_pb");
const { ListAppsRequest } = require("./speechly/config/v1/config_api_pb");

// Create a client for Speechly Configuration API.
const client = new ConfigAPIClient("api.speechly.com", credentials.createSsl());

// Set up metadata with authorization token.
const token = "my-api-token";
const md = new Metadata();
md.add("Authorization", `Bearer ${token}`);

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
  const apps = res.getAppsList();

  console.log("Fetched", apps.length, "apps");
  apps.forEach((app) =>
    console.log("App details", app.getId(), app.getName(), app.getLanguage())
  );
});
