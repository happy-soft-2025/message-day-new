"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const config_1 = require("./config");
const database = config_1.client.db('message-day');
class Category {
    static async existCategory(category) {
        try {
            await config_1.client.connect();
            const existCategory = await database.collection('categorys').findOne({ category });
            if (existCategory?.category) {
                return true;
            }
            return false;
        }
        catch (err) {
            return false;
        }
        finally {
            await config_1.client.close();
        }
    }
    static async newCategory(category) {
        try {
            await config_1.client.connect();
            const responseSaveCategory = await database.collection('categorys').insertOne({ category });
            if (responseSaveCategory.insertedId) {
                return true;
            }
            return false;
        }
        catch (err) {
            return false;
        }
        finally {
            await config_1.client.close();
        }
    }
    static async allCategorys() {
        try {
            await config_1.client.connect();
            const allCategorysSave = await database.collection('categorys').find({}).toArray();
            return allCategorysSave;
        }
        catch (err) {
            return [];
        }
        finally {
            await config_1.client.close();
        }
    }
    static async removeCategory(category) {
        try {
            await config_1.client.connect();
            const deleteNameCategory = await database.collection("categorys").deleteOne({ category });
            if (deleteNameCategory.deletedCount > 0) {
                return true;
            }
            return false;
        }
        catch (er) {
            return false;
        }
        finally {
            await config_1.client.close();
        }
    }
}
exports.Category = Category;
