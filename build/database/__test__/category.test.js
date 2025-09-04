"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_crypto_1 = require("node:crypto");
const vitest_1 = require("vitest");
const category_1 = require("../category");
const nameClass = (0, node_crypto_1.randomUUID)();
(0, vitest_1.beforeAll)(async () => {
    await category_1.Category.newCategory(nameClass);
});
(0, vitest_1.describe)('test class category', () => {
    (0, vitest_1.it)('test method allCategory', async () => {
        const listCategory = await category_1.Category.allCategorys();
        (0, vitest_1.expect)(listCategory instanceof Array).toBe(true);
    });
    (0, vitest_1.it)('test method exist category', async () => {
        const existCategory = await category_1.Category.existCategory(nameClass);
        (0, vitest_1.expect)(typeof existCategory).toBeTruthy();
    });
    (0, vitest_1.it)('test method remove category', async () => {
        const removeClass = await category_1.Category.removeCategory(nameClass);
        (0, vitest_1.expect)(typeof removeClass).toBeTruthy();
    });
});
