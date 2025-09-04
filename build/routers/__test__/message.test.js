"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest"));
const config_1 = require("../../server/config");
const database_1 = require("../../database");
(0, vitest_1.beforeAll)(async () => {
    const existCategory = await database_1.Category.existCategory('test');
    if (!existCategory) {
        await database_1.Category.newCategory("test");
    }
});
let idMessage;
(0, vitest_1.describe)("test routers message", () => {
    (0, vitest_1.it)('test route message now', async () => {
        const messageNow = await (0, supertest_1.default)(config_1.server)
            .post('/message/new/now')
            .send({ message: "message update" });
        (0, vitest_1.expect)(messageNow.statusCode).toBe(200);
        (0, vitest_1.expect)(messageNow.body.sucess).toBe(true);
    });
    (0, vitest_1.it)('test route message view ', async () => {
        const messageNow = await (0, supertest_1.default)(config_1.server)
            .get('/message/view/now');
        (0, vitest_1.expect)(messageNow.statusCode).toBe(200);
        (0, vitest_1.expect)(messageNow.body.sucess).toBe(true);
    });
    (0, vitest_1.it)('test route message add', async () => {
        const messageNow = await (0, supertest_1.default)(config_1.server)
            .post('/message/add')
            .send({
            category: 'test',
            message: "message update"
        });
        (0, vitest_1.expect)(messageNow.statusCode).toBe(200);
        (0, vitest_1.expect)(messageNow.body.sucess).toBe(true);
    });
    (0, vitest_1.it)('test route message all', async () => {
        const messageNow = await (0, supertest_1.default)(config_1.server)
            .get('/message/all/test/0');
        idMessage = await messageNow.body.messages[0].id;
        (0, vitest_1.expect)(messageNow.statusCode).toBe(200);
        (0, vitest_1.expect)(messageNow.body.sucess).toBe(true);
        (0, vitest_1.expect)(messageNow.body.messages.length >= 0).toBe(true);
    });
    (0, vitest_1.it)('test route remove message ', async () => {
        const messageNow = await (0, supertest_1.default)(config_1.server)
            .delete(`/message/delete/${idMessage}`);
        (0, vitest_1.expect)(messageNow.statusCode).toBe(200);
        (0, vitest_1.expect)(typeof messageNow.body.sucess === 'boolean').toBe(true);
    });
});
