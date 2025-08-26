"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const node_path_1 = __importDefault(require("node:path"));
const promises_1 = __importDefault(require("node:fs/promises"));
const config_1 = require("./config");
config_1.server.listen(process.env.PORT || 3000, async () => {
    await promises_1.default.mkdir(node_path_1.default.resolve('.', 'src', 'upload'), { recursive: true });
    await promises_1.default.mkdir(node_path_1.default.resolve('.', 'src', 'images'), { recursive: true });
    if (process.env.DEV) {
        console.log("server init ✅", process.env.DATABASE_URL);
    }
});
