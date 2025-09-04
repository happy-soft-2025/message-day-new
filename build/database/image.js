"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const mongodb_1 = require("mongodb");
const config_1 = require("./config");
const database = config_1.client.db('message-day');
class Image {
    static async registerImage(category, path) {
        try {
            await config_1.client.connect();
            const resSaveImageDatabase = await database.collection('images').insertOne({ category, path });
            if (!resSaveImageDatabase.insertedId) {
                return false;
            }
            return true;
        }
        catch (err) {
            return false;
        }
        finally {
            await config_1.client.close();
        }
    }
    static async counImage() {
        try {
            await config_1.client.connect();
            const countImages = await database.collection('images').countDocuments();
            return countImages;
        }
        catch (err) {
            return 0;
        }
        finally {
            await config_1.client.close();
        }
    }
    static async allImages(category, skip) {
        try {
            await config_1.client.connect();
            console.log('aqui');
            const listImages = await database.collection('images')
                .find({ category })
                .limit(10)
                .skip(skip)
                .toArray();
            console.log('aqq', listImages);
            return listImages;
        }
        catch (err) {
            console.log(err);
            return [];
        }
        finally {
        }
    }
    static async searchImage(id) {
        try {
            await config_1.client.connect();
            const myId = new mongodb_1.ObjectId(id);
            const searchImageResponse = await database.collection('images')
                .find({ _id: myId })
                .toArray();
            return searchImageResponse;
        }
        catch (err) {
            return [];
        }
        finally {
            await config_1.client.close();
        }
    }
    static async deleteImage(id) {
        try {
            await config_1.client.connect();
            const responseDelete = await database.collection('images').deleteOne({ _id: new mongodb_1.ObjectId(id) });
            if (responseDelete.deletedCount > 0) {
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
    static async deleteAllImagesCategorys(category) {
        try {
            await config_1.client.connect();
            const listImagesDeleteds = await database.collection('images').deleteMany({ category });
            if (listImagesDeleteds.deletedCount > 0) {
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
}
exports.Image = Image;
