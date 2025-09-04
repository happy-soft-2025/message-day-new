"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMessage = void 0;
const express_1 = require("express");
const validation_info_message_1 = require("../../middlewares/validation_info_message");
const new_message_1 = require("../../controllers/new_message");
const addMessage = (0, express_1.Router)();
exports.addMessage = addMessage;
addMessage.post('/message/add', validation_info_message_1.validationInfoNewMessage, new_message_1.newMessage);
