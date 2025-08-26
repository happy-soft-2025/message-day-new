"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCategory = registerCategory;
const database_1 = require("../database");
async function registerCategory(req, res, next) {
    try {
        const nameCategory = req.body.category.replaceAll(' ', '_');
        if (nameCategory === '') {
            res.json({
                sucess: false,
                message: "found category name"
            });
            return;
        }
        const existCategory = await database_1.Category.existCategory(nameCategory);
        if (existCategory) {
            res.json({
                sucess: false,
                message: 'exist category'
            });
            return;
        }
        const registeCategory = await database_1.Category.newCategory(nameCategory);
        if (!registeCategory) {
            res.json({
                sucess: false,
                message: 'error registred in database'
            });
            return;
        }
        res.json({
            sucess: true,
            message: 'cadastred'
        });
    }
    catch (err) {
        res.json({
            sucess: false,
            message: 'server error'
        });
    }
}
