const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const envvar   = require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri      = process.env.ATLAS_URI;

const app  = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("tes1").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  catch(err){
    console.log(err);
  }
   finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const exercisesRouter = require('./routes/exercises');
const usersRouter     = require('./routes/users')

app.use('/exercises', exercisesRouter);
app.use('/users',     usersRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
