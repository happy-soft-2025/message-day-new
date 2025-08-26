import { PrismaClient  } from '../../generated/prisma';


const connectionMessage = new PrismaClient();

class Message {

  static async newMessage(message:string, category: string):Promise<boolean>{
    
    try {
      await connectionMessage.$connect();

      const responseRegistred = await connectionMessage.message.createMany({
        data: {
          category,
          message
        }
      })

      if(responseRegistred.count){
        return true
      }
      return false

    }
    catch (err){
      return false
    }
    finally {
      await connectionMessage.$disconnect();
    }
    
  }


  static async deleteMessage(id: number):Promise<boolean>{

      try {
        await connectionMessage.$connect();

        const responseDelete = await connectionMessage.message.deleteMany({
          where: { id }
        })

        if(responseDelete.count < 1){
          return false
        }

        return true
    }
    catch (err){
      return false
    }
    finally {
      await connectionMessage.$disconnect();
    }

  }


  static async allMessages(page: number, category: string): Promise<{ id: number, category: string, message: string }[] | boolean>{
      try {
      await connectionMessage.$connect();

      const listMessages = await connectionMessage.message.findMany({
        where: { category },
        skip: page,
        take: 20,
        orderBy: [{ id: 'desc' }]
      })

      return listMessages
  

    }
    catch (err){
      return false
    }
    finally {
      await connectionMessage.$disconnect();
    }
  }


  static async messageCount(){
     await connectionMessage.$connect()

     const maxMessage = await connectionMessage.message.count();

     await connectionMessage.$disconnect();

     return maxMessage
  }



  static async deleteAllMessagesCategorys(category: string){

  try {

    await connectionMessage.$connect();


    const imagesDeleted = await connectionMessage.message.deleteMany({
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

    await connectionMessage.$disconnect()
  }

}



}


export { Message }