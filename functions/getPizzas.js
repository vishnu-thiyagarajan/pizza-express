import { connectToDatabase } from "../lib/database";

exports.handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    const db = await connectToDatabase();
    const collection = await db.collection("Pizza");
    const pizzas = await collection.find({}).toArray();
    return { statusCode: 200, body: JSON.stringify({ pizzas }) };
  }
  return { statusCode: 400, body: JSON.stringify({}) };
};
