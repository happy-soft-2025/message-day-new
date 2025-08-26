"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const prisma_1 = require("../../generated/prisma");
const connectionMessage = new prisma_1.PrismaClient();
class Message {
    static async newMessage(message, category) {
        try {
            await connectionMessage.$connect();
            const responseRegistred = await connectionMessage.message.createMany({
                data: {
                    category,
                    message
                }
            });
            if (responseRegistred.count) {
                return true;
            }
            return false;
        }
        catch (err) {
            return false;
        }
        finally {
            await connectionMessage.$disconnect();
        }
    }
    static async deleteMessage(id) {
        try {
            await connectionMessage.$connect();
            const responseDelete = await connectionMessage.message.deleteMany({
                where: { id }
            });
            if (responseDelete.count < 1) {
                return false;
            }
            return true;
        }
        catch (err) {
            return false;
        }
        finally {
            await connectionMessage.$disconnect();
        }
    }
    static async allMessages(page, category) {
        try {
            await connectionMessage.$connect();
            const listMessages = await connectionMessage.message.findMany({
                where: { category },
                skip: page,
                take: 20,
                orderBy: [{ id: 'desc' }]
            });
            return listMessages;
        }
        catch (err) {
            return false;
        }
        finally {
            await connectionMessage.$disconnect();
        }
    }
    static async messageCount() {
        await connectionMessage.$connect();
        const maxMessage = await connectionMessage.message.count();
        await connectionMessage.$disconnect();
        return maxMessage;
    }
    static async deleteAllMessagesCategorys(category) {
        try {
            await connectionMessage.$connect();
            const imagesDeleted = await connectionMessage.message.deleteMany({
                where: { category }
            });
            if (imagesDeleted.count > 0) {
                return true;
            }
            return false;
        }
        catch (err) {
            return false;
        }
        finally {
            await connectionMessage.$disconnect();
        }
    }
}
exports.Message = Message;
