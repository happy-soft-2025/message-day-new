"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const express_1 = require("express");
const register_category_1 = require("../../controllers/register_category");
const add = (0, express_1.Router)();
exports.add = add;
add.post('/category/add', register_category_1.registerCategory);
