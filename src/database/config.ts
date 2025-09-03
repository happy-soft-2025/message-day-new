import 'dotenv/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(
  process.env.DATABASE_URL as string,
  {
    maxPoolSize: 150,
    serverApi: {
       version: ServerApiVersion.v1,
       strict: true,
       deprecationErrors: true
    }
  }
)

export { client }