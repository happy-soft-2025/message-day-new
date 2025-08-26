"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const promises_1 = __importDefault(require("node:fs/promises"));
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest"));
const config_1 = require("../../server/config");
(0, vitest_1.beforeAll)(async () => {
    await promises_1.default.mkdir(node_path_1.default.resolve('.', 'src', 'images', 'test_1'), { recursive: true });
});
(0, vitest_1.describe)('test routers category', () => {
    (0, vitest_1.it)('test route category add', async () => {
        const add = await (0, supertest_1.default)(config_1.server)
            .post('/category/add')
            .send({ category: 'test_1' });
        (0, vitest_1.expect)(add.body.sucess).toBe(true);
        (0, vitest_1.expect)(add.statusCode).toBe(200);
    });
    (0, vitest_1.it)('test route category all', async () => {
        const all = await (0, supertest_1.default)(config_1.server)
            .get('/category/all');
        (0, vitest_1.expect)(all.body.sucess).toBe(true);
        (0, vitest_1.expect)(all.statusCode).toBe(200);
        (0, vitest_1.expect)(all.body.categorys.length >= 0).toBe(true);
    });
    (0, vitest_1.it)('test route category remove', async () => {
        const remove = await (0, supertest_1.default)(config_1.server)
            .delete('/category/delete')
            .send({ category: 'test_1' });
        (0, vitest_1.expect)(remove.body.sucess).toBe(true);
        (0, vitest_1.expect)(remove.statusCode).toBe(200);
    });
});
