"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImageAll = deleteImageAll;
const node_path_1 = __importDefault(require("node:path"));
const promises_1 = __importDefault(require("node:fs/promises"));
const database_1 = require("../database");
async function deleteImageAll(req, res) {
    const sucessDeleteImageDataBase = await database_1.Image.deleteImage(req.body.imageDelete.id);
    if (!sucessDeleteImageDataBase) {
        res.json({
            sucess: false,
            message: 'error delete image database'
        });
        return;
    }
    await promises_1.default.unlink(node_path_1.default.resolve('.', 'src', 'images', req.body.imageDelete.path))
        .catch(err => {
        res.json({
            sucess: false,
            message: 'error in delete image folder'
        });
    });
    res.json({
        sucess: true,
        message: 'delete sucess'
    });
}
