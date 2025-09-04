"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnImages = returnImages;
const database_1 = require("../database");
async function returnImages(req, res, next) {
    try {
        const { category, page } = req.params;
        const images = await database_1.Image.allImages(category, Number(page));
        console.log(images);
        res.json({
            sucess: true,
            images
        });
        return;
    }
    catch (err) {
        res.json({
            sucess: false,
            images: []
        });
    }
}
