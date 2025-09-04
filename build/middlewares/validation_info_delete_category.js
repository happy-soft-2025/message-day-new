"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationInfoDeleteCategory = validationInfoDeleteCategory;
const database_1 = require("../database");
async function validationInfoDeleteCategory(req, res, next) {
    const category = req.body.category.replaceAll(" ", "_");
    if (!req.body.category) {
        res.json({
            sucess: false,
            message: 'to send category'
        });
        return;
    }
    const existCategoryDatabase = await database_1.Category.existCategory(category);
    if (!existCategoryDatabase) {
        res.json({
            sucess: false,
            message: 'not resgited in database'
        });
        return;
    }
    next();
}
