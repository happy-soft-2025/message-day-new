"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.view = void 0;
const express_1 = require("express");
const database_1 = require("../../database");
const view = (0, express_1.Router)();
exports.view = view;
view.get('/message/view/now', async (req, res) => {
    const messageView = await database_1.MessageNow.messageView();
    res.json({
        sucess: true,
        message: messageView
    });
});
