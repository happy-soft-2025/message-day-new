"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const prisma_1 = require("../../generated/prisma");
const connectionDataBaseImage = new prisma_1.PrismaClient();
class Image {
    static async registerImage(category, path) {
        try {
            if (category === undefined || path === undefined) {
                return false;
            }
            if (category === '' || path === '') {
                return false;
            }
            await connectionDataBaseImage.$connect();
            await connectionDataBaseImage.image.create({
                data: {
                    category,
                    path
                }
            });
            return true;
        }
        catch (err) {
            return false;
        }
        finally {
            await connectionDataBaseImage.$disconnect();
        }
    }
    static async counImage() {
        try {
            await connectionDataBaseImage.$connect();
            const maxImageRegistred = await connectionDataBaseImage.image.count();
            return maxImageRegistred;
        }
        catch (err) {
            return 0;
        }
        finally {
            await connectionDataBaseImage.$disconnect();
        }
    }
    static async allImages(category, skip) {
        try {
            await connectionDataBaseImage.$connect();
            const images = await connectionDataBaseImage.image.findMany({
                where: {
                    category,
                },
                skip,
                take: 10,
                orderBy: [{ id: 'desc' }]
            });
            return images;
        }
        catch (err) {
            return [];
        }
        finally {
            await connectionDataBaseImage.$disconnect();
        }
    }
    static async searchImage(id) {
        try {
            await connectionDataBaseImage.$connect();
            const image = await connectionDataBaseImage.image.findMany({
                where: { id }
            });
            return image;
        }
        catch (err) {
            return [];
        }
        finally {
            await connectionDataBaseImage.$disconnect();
        }
    }
    static async deleteImage(id) {
        try {
            await connectionDataBaseImage.$connect();
            const deleteImageResponse = await connectionDataBaseImage.image.deleteMany({
                where: { id }
            });
            if (deleteImageResponse.count > 0) {
                return true;
            }
            return false;
        }
        catch (err) {
            return false;
        }
        finally {
            await connectionDataBaseImage.$disconnect();
        }
    }
    static async deleteAllImagesCategorys(category) {
        try {
            await connectionDataBaseImage.$connect();
            const imagesDeleted = await connectionDataBaseImage.image.deleteMany({
                where: { category }
            });
            if (imagesDeleted.count > 0) {
                return true;
            }
            return false;
        }
        catch (err) {
            return false;
        }
        finally {
            await connectionDataBaseImage.$disconnect();
        }
    }
}
exports.Image = Image;
