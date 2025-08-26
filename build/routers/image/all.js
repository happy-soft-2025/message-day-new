"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = void 0;
const express_1 = require("express");
const return_images_1 = require("../../controllers/return_images");
const all = (0, express_1.Router)();
exports.all = all;
all.get('/image/all/:category/:page', return_images_1.returnImages);
