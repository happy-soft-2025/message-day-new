"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationInfoNewMessage = validationInfoNewMessage;
const database_1 = require("../database");
async function validationInfoNewMessage(req, res, next) {
    if (!req.body.category || !req.body.message) {
        res.json({
            sucess: false,
            message: "require category or message"
        });
        return;
    }
    const existCategory = await database_1.Category.existCategory(req.body.category.replaceAll(" ", "_"));
    if (!existCategory) {
        res.json({
            sucess: false,
            message: "not category exist"
        });
        return;
    }
    next();
}
