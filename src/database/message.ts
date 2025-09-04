import { ObjectId, ReturnDocument, WithId } from 'mongodb';
import { client } from './config';

const database = client.db('message-day')

class Message {

  static async newMessage(message:string, category: string):Promise<boolean>{
    try {

      await client.connect()

      const saveMessage = await database.collection('messages').insertOne({ message, category })


      if(saveMessage.insertedId){
        return true
      }
      return false

    }
    catch (err){
      await client.close()
      return false

    }
    finally {
      await client.close()
    }
    
  }


  static async deleteMessage(id: string):Promise<boolean>{

      try {
        await client.connect()

        const _id = new ObjectId(id)
        
        const isDeleted = await database.collection('messages').deleteOne({ _id })
        if(isDeleted.deletedCount > 0){
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


  static async allMessages(page: number, category: string){
     try {

      await client.connect()

      const listMessages = await database.collection('messages')
      .find({ category })
      .skip(page)
      .limit(20)
      .sort({ _id: -1 })
      .toArray()

      return listMessages
     }
     catch (err){
      console.log(err)
      await client.close()
     }
     finally {
      await client.close()
     }
  }


  static async messageCount(): Promise<number>{
     const messagesCount = await database.collection('messages').countDocuments()
     return messagesCount
  }



  static async deleteAllMessagesCategorys(category: string){

    try{

      await client.connect()
      await database.collection('messages').deleteMany({ category })

    }
    catch (err){

      await client.close()

    }
    finally {
      await client.close()

    }

}



}


export { Message }