const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
let cachedDb = null;
export const connectToDatabase = async () => {
  if (cachedDb) {
    console.log("Use existing connection");
    return Promise.resolve(cachedDb);
  } else {
    return MongoClient.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
    })
      .then((client) => {
        let db = client.db("Pizza-Store");
        console.log("New Database connection");
        cachedDb = db;
        return cachedDb;
      })
      .catch((err) => {
        console.log("connection error", err);
      });
  }
};
