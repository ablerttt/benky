const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://albert:xVMENDHCGi6sGaj@benkymain.wlkyu.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
