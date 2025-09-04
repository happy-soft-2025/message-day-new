"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = deleteMessage;
const database_1 = require("../database");
async function deleteMessage(req, res) {
    if (!req.params.id) {
        res.json({
            sucess: false,
            message: "request id"
        });
        return;
    }
    const responseDeleteMessage = await database_1.Message.deleteMessage(req.params.id);
    if (!responseDeleteMessage) {
        res.json({
            sucess: false,
            message: "not exist message"
        });
        return;
    }
    res.json({
        sucess: true,
        message: "message deleted"
    });
}
