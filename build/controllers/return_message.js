"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnMessage = returnMessage;
const database_1 = require("../database");
async function returnMessage(req, res) {
    try {
        const { category, page } = req.params;
        if (!category || !page) {
            res.json({
                sucess: false,
                message: 'request info category or page'
            });
            return;
        }
        const existCateory = await database_1.Category.existCategory(category);
        if (!existCateory) {
            res.json({
                sucess: false,
                message: 'not exist category'
            });
            return;
        }
        const messages = await database_1.Message.allMessages(Number(page), category);
        res.json({
            sucess: true,
            messages: messages
        });
    }
    catch (err) {
    }
}
