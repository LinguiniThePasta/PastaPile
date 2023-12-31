import { MongoClient } from "mongodb";
import { config } from 'dotenv';
config({ path: '../.env' });
const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch(e) {
    console.error(e);
}
let db = conn.db("blog");
export default db;