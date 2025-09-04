"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_form_data_1 = __importDefault(require("express-form-data"));
const routers_1 = require("../routers");
const server = (0, express_1.default)();
exports.server = server;
// setters
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use(express_form_data_1.default.parse({ uploadDir: node_path_1.default.resolve(".", 'src', 'upload') }));
server.use(express_form_data_1.default.format());
server.use(express_form_data_1.default.union());
server.use(express_form_data_1.default.stream());
server.use(express_1.default.static(node_path_1.default.resolve('.', 'src', 'images')));
// routers
server.use(routers_1.routers);
