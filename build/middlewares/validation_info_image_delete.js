"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validInfoImageDelete = validInfoImageDelete;
const node_path_1 = __importDefault(require("node:path"));
const promises_1 = __importDefault(require("node:fs/promises"));
const database_1 = require("../database");
async function validInfoImageDelete(req, res, next) {
    if (!req.body.id) {
        res.json({
            sucess: false,
            message: 'found id'
        });
        return;
    }
    const existImageDatabase = await database_1.Image.searchImage(req.body.id);
    if (!existImageDatabase[0]?._id) {
        res.json({
            sucess: false,
            message: 'not exist image in database'
        });
        return;
    }
    const pathImage = existImageDatabase[0].path;
    const nameImage = pathImage.slice(pathImage.lastIndexOf('/') + 1, pathImage.length);
    const listImagesCategory = await promises_1.default.readdir(node_path_1.default.resolve('.', 'src', 'images', existImageDatabase[0].category));
    const existImageFolder = listImagesCategory.some(image => image === nameImage);
    if (!existImageFolder) {
        res.json({
            sucess: false,
            message: 'not exist image folder'
        });
        return;
    }
    req.body.imageDelete = {
        id: req.body.id,
        path: pathImage
    };
    next();
}
