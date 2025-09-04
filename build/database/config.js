"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
require("dotenv/config");
const mongodb_1 = require("mongodb");
const client = new mongodb_1.MongoClient(process.env.DATABASE_URL, {
    maxPoolSize: 150,
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});
exports.client = client;
