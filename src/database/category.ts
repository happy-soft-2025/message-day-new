import { PrismaClient } from '../../generated/prisma';

const connectionDatabseCategory = new PrismaClient();

class Category {


  static async existCategory(category: string): Promise<boolean> {
    try {

      await connectionDatabseCategory.$connect();

      const categoryName = await connectionDatabseCategory.category.findMany({
        where: { category }
      })

      if(categoryName.length < 1){
        return false
      }

      return true
    }
    catch (err) {
      return false
    }
  }


  static async newCategory(category: string): Promise<boolean>{
    console.log(category)
    try {

      connectionDatabseCategory.$connect();

      const insertCategory = await connectionDatabseCategory.category.create({
        data: { category }
      })

      if(insertCategory.id === undefined){
        return false
      }

      return true

    }
    catch (err) {
      console.log(err)
      return false
    }
    finally {
      await connectionDatabseCategory.$disconnect()
    }
  }


  static async allCategorys(): Promise<{id: number, category: string}[]>{
    try {

      await connectionDatabseCategory.$connect();

      const categorys: {id: number, category: string}[] = await connectionDatabseCategory.category.findMany()
      return categorys

    }
    catch (err){
      return []

    }
  }

  static async removeCategory(category: string): Promise<boolean>{

    try {

      await connectionDatabseCategory.$connect()

      const deleteCategory = await connectionDatabseCategory.category.deleteMany({
        where: { category }
      })

      if(deleteCategory.count > 0){
        return true
      }

      return false


    }
    catch (err) {
      return false

    }
    finally {

      await connectionDatabseCategory.$disconnect()

    }

  }

}

export { Category }