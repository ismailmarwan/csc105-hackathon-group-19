const MongoClient = require('mongodb').MongoClient;

async function connectToMongoDB() {
  // MongoDB connection configuration
  const url = 'mongodb://localhost:27017';
  const dbName = 'mydatabase';

  try {
    // Create a new MongoClient
    const client = new MongoClient(url, { useNewUrlParser: true });

    // Connect to the MongoDB server
    await client.connect();

    console.log('Connected to MongoDB');

    // Get a reference to the database
    const db = client.db(dbName);

    // Return the database object
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = connectToMongoDB;

