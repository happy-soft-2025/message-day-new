"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
const express_1 = require("express");
const delete_message_1 = require("../../controllers/delete_message");
const remove = (0, express_1.Router)();
exports.remove = remove;
remove.delete('/message/delete/:id', delete_message_1.deleteMessage);
