"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
const express_1 = require("express");
const image_1 = require("./image");
const category_1 = require("./category");
const message_1 = require("./message");
const routers = (0, express_1.Router)();
exports.routers = routers;
routers.use(image_1.image);
routers.use(category_1.category);
routers.use(message_1.message);
routers.use(function (req, res, next) {
    res.json({
        sucess: false,
        message: 'page not faund 404'
    });
    return;
});
