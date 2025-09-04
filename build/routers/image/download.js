"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.download = void 0;
const node_path_1 = __importDefault(require("node:path"));
const express_1 = require("express");
const database_1 = require("../../database");
const download = (0, express_1.Router)();
exports.download = download;
download.get('/image/download/:id', async (req, res) => {
    if (!req.params.id) {
        res.json({
            sucess: false,
            message: 'request id image'
        });
        return;
    }
    await database_1.Image.searchImage(req.params.id)
        .then(async (image) => {
        res.download(node_path_1.default.resolve(".", 'src', 'images', image[0].path));
        return;
    })
        .catch((err) => {
        res.json({
            sucess: false,
            message: 'error search image'
        });
    });
});
