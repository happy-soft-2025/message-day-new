import { ObjectId } from 'mongodb';
import { client } from './config';

const database = client.db('message-day')

class Image{

  static async registerImage(category: string, path: string): Promise<boolean>{

    try {

      await client.connect()

      const resSaveImageDatabase = await database.collection('images').insertOne({ category, path });

      if(!resSaveImageDatabase.insertedId){
        return false
      }

      return true
   }
   catch (err) {
    return false
   }

  finally {
    await client.close()
   }
}


static async counImage(): Promise<number>{
  try {

    await client.connect()

    const countImages = await database.collection('images').countDocuments()
   
    return countImages
  }
  catch (err) {
    return 0;
  }
  finally {
   await client.close()
  }

}

static async allImages(category: string, skip: number): Promise<any[]> {
  try {

    await client.connect()

   const listImages = await database.collection('images')
   .find({ category })
   .limit(10)
   .skip(skip)
   .toArray()

   return listImages

  }
  catch (err) {
   console.log(err)
    return []

  }
  finally {
    
  }

}


static async searchImage(id: string):Promise<{ _id: string, path: string, category: string }[]> {
  try {

    await client.connect()

    const myId = new ObjectId(id)

    const searchImageResponse = await database.collection('images')
    .find({ _id: myId })
    .toArray()

    return searchImageResponse as any

  }
  catch (err){
    return []

  }
  finally {

    await client.close()
  }
}


static async deleteImage(id: string): Promise<boolean>{

  try {

    await client.connect()

    const responseDelete = await database.collection('images').deleteOne({ _id: new ObjectId(id) });

    if(responseDelete.deletedCount > 0){
      return true
    }

    return false

  }
  catch (err){

    return false

  }
  finally {

    await client.close()
  }

}


static async deleteAllImagesCategorys(category: string){

  try {
    await client.connect()
    const listImagesDeleteds = await database.collection('images').deleteMany({ category });

    if(listImagesDeleteds.deletedCount > 0){
      return true
    }

    return false

  }
  catch (err) {
    return false
  }
  finally {
    await client.close()
  }

}


}

export { Image }