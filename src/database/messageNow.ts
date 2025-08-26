import {  PrismaClient } from '../../generated/prisma';

const connectionDataBase = new PrismaClient()

class MessageNow {
  static async addMessageNow(message: string): Promise<boolean>{

    try {

      await connectionDataBase.$connect()

      const existMessageRegistred = await connectionDataBase.messageNow.findMany()
      

      if(existMessageRegistred.length < 1){

        await connectionDataBase.messageNow.create({
          data: {
            message
          }
        })

      }

      await connectionDataBase.messageNow.updateMany({
        where: { id: 1 },
        data: { message }
      })

      return true
    }

    catch (err) {
      return false
    }

    finally {

      await connectionDataBase.$disconnect();
    }

  }


  static async messageView(){
    
    try {

      await connectionDataBase.$connect();

      const message = await connectionDataBase.messageNow.findMany({ where: { id: 1 } })

      return message

    }
    catch (err) {

      return ''

    }

    finally {

      await connectionDataBase.$disconnect()

    }

  }
}


export { MessageNow }