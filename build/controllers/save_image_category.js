"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveImageCategory = saveImageCategory;
const node_path_1 = __importDefault(require("node:path"));
const promises_1 = __importDefault(require("node:fs/promises"));
const database_1 = require("../database");
async function moveImageCategory(pathUplaod, folderCategory) {
    await promises_1.default.copyFile(pathUplaod, folderCategory);
    await promises_1.default.unlink(pathUplaod);
}
;
async function saveImageCategory(req, res, next) {
    try {
        await moveImageCategory(node_path_1.default.resolve('.', 'src', 'upload', req.body.newNameImage), node_path_1.default.resolve('.', 'src', 'images', req.body.nameCategory, req.body.newNameImage));
        const saveImageRespomse = await database_1.Image.registerImage(req.body.nameCategory, `${req.body.nameCategory}/${req.body.newNameImage}`);
        if (!saveImageRespomse) {
            res.json({
                sucess: false,
                message: "not rigiste in database"
            });
            return;
        }
        res.json({
            sucess: true,
            message: 'image save'
        });
        return;
    }
    catch (err) {
        res.json({
            sucess: false,
            message: "error save image"
        });
    }
}
