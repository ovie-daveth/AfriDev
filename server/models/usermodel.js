const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://AfriDev:0dHGdx49JQNBxIzy@afridev.bdsmxqi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("sample_guides");
    const coll = db.collection("planets");

    // find code goes here
    const cursor = coll.find();

    // iterate code goes here
    await cursor.forEach(console.log);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


//