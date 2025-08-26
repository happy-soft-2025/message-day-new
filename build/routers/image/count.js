"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
const express_1 = require("express");
const database_1 = require("../../database");
const count = (0, express_1.Router)();
exports.count = count;
count.get('/image/count', async (req, res) => {
    const images = await database_1.Image.counImage();
    res.json({
        sucess: true,
        images: images
    });
});
