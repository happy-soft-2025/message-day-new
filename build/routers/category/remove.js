"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
const express_1 = require("express");
const validation_info_delete_category_1 = require("../../middlewares/validation_info_delete_category");
const delete_category_1 = require("../../controllers/delete_category");
const remove = (0, express_1.Router)();
exports.remove = remove;
remove.delete('/category/delete', validation_info_delete_category_1.validationInfoDeleteCategory, delete_category_1.deleteCategory);
