"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageNow = void 0;
const express_1 = require("express");
const database_1 = require("../../database");
const messageNow = (0, express_1.Router)();
exports.messageNow = messageNow;
messageNow.post('/message/new/now', async (req, res) => {
    if (req.body.message === "") {
        res.json({
            sucess: false,
            message: "not found message"
        });
        return;
    }
    const responseUpdate = await database_1.MessageNow.addMessageNow(req.body.message);
    if (!responseUpdate) {
        res.json({
            sucess: false,
            message: 'error message not save database'
        });
        return;
    }
    res.json({
        sucess: true,
        message: "update completed"
    });
});
