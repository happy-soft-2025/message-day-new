"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = void 0;
const express_1 = require("express");
const validation_info_image_delete_1 = require("../../middlewares/validation_info_image_delete");
const delete_image_1 = require("../../controllers/delete_image");
const deleteImage = (0, express_1.Router)();
exports.deleteImage = deleteImage;
deleteImage.delete("/image/delete", validation_info_image_delete_1.validInfoImageDelete, delete_image_1.deleteImageAll);
