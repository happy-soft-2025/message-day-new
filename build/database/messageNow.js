"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageNow = void 0;
const config_1 = require("./config");
const database = config_1.client.db('message-day');
class MessageNow {
    static async addMessageNow(message) {
        try {
            await config_1.client.connect();
            await database.collection('message-now').deleteMany();
            await database.collection('message-now').insertOne({ message });
            return true;
        }
        catch (err) {
            await config_1.client.close();
            return false;
        }
        finally {
            await config_1.client.close();
        }
    }
    static async messageView() {
        try {
            await config_1.client.connect();
            const messageNow = await database.collection('message-now')
                .find({})
                .toArray();
            return messageNow;
        }
        catch (err) {
        }
        finally {
            await config_1.client.close();
        }
    }
}
exports.MessageNow = MessageNow;
