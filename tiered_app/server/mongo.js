require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.ATLAS_URI || "";

let client;
let database;
let collection;

async function connect() {
  if (client && database && collection) {
    return { database, collection };
  }

  try {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Conectado ao MongoDB com sucesso!");

    database = client.db('testdb');
    collection = database.collection('testcollection');

    return { database, collection };
  } catch (err) {
    res.status(404).json({ error: "Erro ao conectar: ", err });
    throw err;
  }
}

async function insertItem() {
  await connect()
  if (!collection) {
    throw new Error("Banco de dados não conectado. Chame `connect()` antes.");
  }

  await collection.insertOne({ greeting: 'Hello Mongo!' });
  console.log("Documento inserido com sucesso!");
}

async function findItem(res) {
  await connect()
  if (!collection) {
    throw new Error("Banco de dados não conectado. Chame `connect()` antes.");
  }

  try{
    const document = await collection.findOne({greeting: 'Hello Mongo!'})
    
    if(document){
      res.json({ greeting: `${document.greeting} + Express`})
      console.log(document.greeting);
    } else{
      res.status(404).json({ error: "Documento não encontrado." });
    }
  } catch (err){
    console.error("Erro ao buscar documento:", err);
    res.status(500).json({ error: "Erro ao buscar documento." });
  }
}

module.exports = {
  connect,
  insertItem,
  findItem
};
