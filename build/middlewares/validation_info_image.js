"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationInfoImage = validationInfoImage;
const promises_1 = __importDefault(require("node:fs/promises"));
const node_crypto_1 = __importDefault(require("node:crypto"));
const database_1 = require("../database");
async function validationInfoImage(req, res, next) {
    if (!req.body.category) {
        await promises_1.default.unlink(req.body.image.path);
        res.json({
            sucess: false,
            message: "not found category"
        });
        return;
    }
    if (!req.body.image) {
        res.json({
            sucess: false,
            message: "not found image"
        });
        return;
    }
    req.body.nameCategory = req.body.category.replaceAll(" ", "_");
    req.body.newNameImage = `${node_crypto_1.default.randomUUID()}_image.png`;
    const existCategorySave = await database_1.Category.existCategory(req.body.nameCategory);
    if (!existCategorySave) {
        await promises_1.default.unlink(req.body.image.path);
        res.json({
            sucess: false,
            message: "not exist category"
        });
        return;
    }
    next();
}
