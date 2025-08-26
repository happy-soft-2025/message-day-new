"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newMessage = newMessage;
const database_1 = require("../database");
async function newMessage(req, res) {
    const responseRegistredMessage = await database_1.Message.newMessage(req.body.message, req.body.category.replaceAll(' ', '_'));
    if (!responseRegistredMessage) {
        res.json({
            sucess: false,
            message: "not save message"
        });
        return;
    }
    res.json({
        sucess: true,
        message: 'message save'
    });
}
