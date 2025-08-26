"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = deleteCategory;
const node_path_1 = __importDefault(require("node:path"));
const promises_1 = __importDefault(require("node:fs/promises"));
const database_1 = require("../database");
async function deleteCategory(req, res) {
    const category = req.body.category.replaceAll(' ', '_');
    try {
        const responseDeleteCategory = await database_1.Category.removeCategory(category);
        await database_1.Image.deleteAllImagesCategorys(category);
        await database_1.Message.deleteAllMessagesCategorys(category);
        if (!responseDeleteCategory) {
            res.json({
                sucess: false,
                message: "not deleted category in database"
            });
            return;
        }
        const listCategoyFolder = await promises_1.default.readdir(node_path_1.default.resolve('.', 'src', 'images', category));
        for await (let image of listCategoyFolder) {
            await promises_1.default.unlink(node_path_1.default.resolve('.', 'src', 'images', category, image));
        }
        res.json({
            sucess: true,
            message: 'category deleted sucess'
        });
        return;
    }
    catch (err) {
        res.json({
            sucess: true,
            message: 'delete category found files'
        });
    }
}
