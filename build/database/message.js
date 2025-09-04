"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const mongodb_1 = require("mongodb");
const config_1 = require("./config");
const database = config_1.client.db('message-day');
class Message {
    static async newMessage(message, category) {
        try {
            await config_1.client.connect();
            const saveMessage = await database.collection('messages').insertOne({ message, category });
            if (saveMessage.insertedId) {
                return true;
            }
            return false;
        }
        catch (err) {
            await config_1.client.close();
            return false;
        }
        finally {
            await config_1.client.close();
        }
    }
    static async deleteMessage(id) {
        try {
            await config_1.client.connect();
            const _id = new mongodb_1.ObjectId(id);
            const isDeleted = await database.collection('messages').deleteOne({ _id });
            if (isDeleted.deletedCount > 0) {
                return true;
            }
            return false;
        }
        catch (err) {
            return false;
        }
        finally {
            await config_1.client.close();
        }
    }
    static async allMessages(page, category) {
        try {
            await config_1.client.connect();
            const listMessages = await database.collection('messages')
                .find({ category })
                .skip(page)
                .limit(20)
                .sort(-1)
                .toArray();
            return listMessages;
        }
        catch (err) {
            await config_1.client.close();
        }
        finally {
            await config_1.client.close();
        }
    }
    static async messageCount() {
        const messagesCount = await database.collection('messages').countDocuments();
        return messagesCount;
    }
    static async deleteAllMessagesCategorys(category) {
        try {
            await config_1.client.connect();
            await database.collection('messages').deleteMany({ category });
        }
        catch (err) {
            await config_1.client.close();
        }
        finally {
            await config_1.client.close();
        }
    }
}
exports.Message = Message;
