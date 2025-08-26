"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest"));
const config_1 = require("../../server/config");
const database_1 = require("../../database");
let imageId;
(0, vitest_1.beforeAll)(async () => {
    const existCategory = await database_1.Category.existCategory('test_2');
    if (!existCategory) {
        await database_1.Category.newCategory('test_2');
    }
});
(0, vitest_1.describe)("test routers images", async () => {
    (0, vitest_1.it)("test router image upload", async () => {
        const upload = await (0, supertest_1.default)(config_1.server)
            .post('/image/upload')
            .attach('image', node_path_1.default.resolve('.', 'src', 'routers', '__test__', 'assets', 'image', 'image.png'))
            .field('category', 'test_2');
        (0, vitest_1.expect)(upload.body.sucess).toBe(true);
        (0, vitest_1.expect)(upload.statusCode).toBe(200);
    });
    (0, vitest_1.it)('test router image count', async () => {
        const count = await (0, supertest_1.default)(config_1.server)
            .get('/image/count');
        (0, vitest_1.expect)(count.statusCode).toBe(200);
        (0, vitest_1.expect)(count.body.sucess).toBe(true);
        (0, vitest_1.expect)(count.body.images >= 0).toBe(true);
    });
    (0, vitest_1.it)('test router image download', async () => {
        const id = await database_1.Image.allImages('test_2', 0);
        imageId = id[0].id;
        const download = await (0, supertest_1.default)(config_1.server)
            .get(`/image/download/${imageId}`);
        (0, vitest_1.expect)(download.statusCode).toBe(200);
    });
    (0, vitest_1.it)('test router image all', async () => {
        const allImages = await (0, supertest_1.default)(config_1.server)
            .get('/image/all/test_/0');
        (0, vitest_1.expect)(allImages.statusCode).toBe(200);
        (0, vitest_1.expect)(allImages.body.sucess).toBe(true);
    });
    (0, vitest_1.it)("test router image delete", async () => {
        const deleteImage = await (0, supertest_1.default)(config_1.server)
            .delete('/image/delete')
            .send({ id: imageId });
        (0, vitest_1.expect)(deleteImage.body.sucess).toBe(true);
        (0, vitest_1.expect)(deleteImage.statusCode).toBe(200);
    });
});
