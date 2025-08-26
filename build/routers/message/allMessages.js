"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allMessages = void 0;
const express_1 = require("express");
const return_message_1 = require("../../controllers/return_message");
const allMessages = (0, express_1.Router)();
exports.allMessages = allMessages;
allMessages.get('/message/all/:category/:page', return_message_1.returnMessage);
