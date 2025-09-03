import { client } from './config';

const database = client.db('message-day')

class Category {

  static async existCategory(category: string): Promise<boolean> {
    try {
      await client.connect();
      const existCategory = await database.collection('categorys').findOne({ category })
      
      if(existCategory?.category){
        return true
      }

      return false
    }
    catch (err){
      return false
    }
    finally {
      await client.close();
    }
  }


  static async newCategory(category: string): Promise<boolean>{
    try {
      await client.connect();
      const responseSaveCategory = await database.collection('categorys').insertOne({ category });
      
      if(responseSaveCategory.insertedId){
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


  static async allCategorys(): Promise<{_id: string, category: string}[]>{
    try {

      await client.connect()
      const allCategorysSave: any = await database.collection('categorys').find({}).toArray();
      return allCategorysSave

    }
    catch (err){
      return []
    }
    finally {
      await client.close()
    }
  }

  
  static async removeCategory(category: string): Promise<boolean>{
    try {
      await client.connect()

      const deleteNameCategory = await database.collection("categorys").deleteOne({ category })
      if(deleteNameCategory.deletedCount > 0){
        return true
      }
      return false
    }
    catch (er){
      return false
    }
    finally {
      await client.close()
    }
  }

}

export { Category }