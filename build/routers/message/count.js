"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
const express_1 = require("express");
const database_1 = require("../../database");
const count = (0, express_1.Router)();
exports.count = count;
count.get("/message/count", async (req, res) => {
    const count = await database_1.Message.messageCount();
    res.json({
        sucess: true,
        message: count
    });
});
