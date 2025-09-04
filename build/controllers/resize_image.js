"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = resizeImage;
const node_path_1 = __importDefault(require("node:path"));
const promises_1 = __importDefault(require("node:fs/promises"));
const sharp_1 = __importDefault(require("sharp"));
async function resize(pathImageUpload, outputSaveImage, category) {
    await (0, sharp_1.default)(pathImageUpload)
        .toFile(`${node_path_1.default.resolve(".", "src", "upload")}/${outputSaveImage}`);
    await promises_1.default.unlink(node_path_1.default.resolve('.', 'src', 'upload', pathImageUpload));
}
async function resizeImage(req, res, next) {
    try {
        await promises_1.default.mkdir(node_path_1.default.resolve('.', 'src', 'images', req.body.nameCategory), { recursive: true });
        await resize(req.body.image.path, req.body.newNameImage, req.body.nameCategory);
    }
    catch (err) {
        res.json({
            sucess: false,
            message: "error in progress convertion image"
        });
        return;
    }
    finally {
        next();
    }
}
