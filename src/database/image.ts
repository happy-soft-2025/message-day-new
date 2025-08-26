import { PrismaClient } from '../../generated/prisma';

const connectionDataBaseImage = new PrismaClient();

class Image{

  static async registerImage(category: string, path: string): Promise<boolean>{

    try {

      if(category === undefined || path === undefined){
        return false
      }

      if(category ===  '' || path === ''){
        return false
      }

      await connectionDataBaseImage.$connect();

      await connectionDataBaseImage.image.create({
        data: {
          category,
          path
        }
      })
      return true
  }
  catch (err) {

   return false
  }

  finally {
    await connectionDataBaseImage.$disconnect();
   }
}


static async counImage(): Promise<number>{
  try {
    await connectionDataBaseImage.$connect();
    const maxImageRegistred = await connectionDataBaseImage.image.count();
    return maxImageRegistred;
  }
  catch (err) {
    return 0;
  }
  finally {
    await connectionDataBaseImage.$disconnect()
  }

}

static async allImages(category: string, skip: number): Promise<{ id: number, path: string, category: string }[]> {
  try {

    await connectionDataBaseImage.$connect();

    const images = await connectionDataBaseImage.image.findMany({
      where: {
        category,
      },
      skip,
      take: 10,
      orderBy: [{ id:  'desc' }]
    })

    return images

  }
  catch (err) {

    return []

  }
  finally {
    await connectionDataBaseImage.$disconnect();
  }

}


static async searchImage(id: number):Promise<{ id: number, path: string, category: string }[]> {
  try {

    await connectionDataBaseImage.$connect();

    const image = await connectionDataBaseImage.image.findMany({
      where: { id }
    })

    return image
  }
   catch (err) {

    return []
   }
   finally {

    await connectionDataBaseImage.$disconnect()
   }
}


static async deleteImage(id: number): Promise<boolean>{

  try {

    await connectionDataBaseImage.$connect();

    const deleteImageResponse = await connectionDataBaseImage.image.deleteMany({
      where: { id }
    })

    if(deleteImageResponse.count > 0){
      return true
    }

    return false


  }
  catch (err){

    return false

  }
  finally {

    await connectionDataBaseImage.$disconnect();

  }

}


static async deleteAllImagesCategorys(category: string){

  try {

    await connectionDataBaseImage.$connect();


    const imagesDeleted = await connectionDataBaseImage.image.deleteMany({
      where: { category }
    })

    if(imagesDeleted.count > 0){
      return true
    }

    return false


  }
  catch (err) {

    return false

  }
  finally {

    await connectionDataBaseImage.$disconnect()
  }

}


}

export { Image }