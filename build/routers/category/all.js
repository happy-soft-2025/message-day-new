"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = void 0;
const express_1 = require("express");
const database_1 = require("../../database");
const all = (0, express_1.Router)();
exports.all = all;
all.get('/category/all', async (req, res) => {
    const categorys = await database_1.Category.allCategorys();
    res.json({
        sucess: true,
        categorys
    });
});
