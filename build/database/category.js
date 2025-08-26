"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const prisma_1 = require("../../generated/prisma");
const connectionDatabseCategory = new prisma_1.PrismaClient();
class Category {
    static async existCategory(category) {
        try {
            await connectionDatabseCategory.$connect();
            const categoryName = await connectionDatabseCategory.category.findMany({
                where: { category }
            });
            if (categoryName.length < 1) {
                return false;
            }
            return true;
        }
        catch (err) {
            return false;
        }
    }
    static async newCategory(category) {
        console.log(category);
        try {
            connectionDatabseCategory.$connect();
            const insertCategory = await connectionDatabseCategory.category.create({
                data: { category }
            });
            if (insertCategory.id === undefined) {
                return false;
            }
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
        finally {
            await connectionDatabseCategory.$disconnect();
        }
    }
    static async allCategorys() {
        try {
            await connectionDatabseCategory.$connect();
            const categorys = await connectionDatabseCategory.category.findMany();
            return categorys;
        }
        catch (err) {
            return [];
        }
    }
    static async removeCategory(category) {
        try {
            await connectionDatabseCategory.$connect();
            const deleteCategory = await connectionDatabseCategory.category.deleteMany({
                where: { category }
            });
            if (deleteCategory.count > 0) {
                return true;
            }
            return false;
        }
        catch (err) {
            return false;
        }
        finally {
            await connectionDatabseCategory.$disconnect();
        }
    }
}
exports.Category = Category;
