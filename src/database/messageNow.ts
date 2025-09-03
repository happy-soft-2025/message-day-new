import { client } from './config';
import { ObjectId } from 'mongodb';

const database = client.db('message-day')

class MessageNow {
  static async addMessageNow(message: string): Promise<boolean>{

    try{

      await client.connect()

      await database.collection('message-now').deleteMany() 
      await database.collection('message-now').insertOne({ message })

      
      return true
    }
    catch (err) {
      await client.close()
      return false
    }
    finally {
      await client.close()
    }

  }


  static async messageView(){
    
    try {

      await client.connect()

      const messageNow = await database.collection('message-now')
      .find({})
      .toArray()

      return messageNow as any

    }
    catch (err){


    }
    finally {
      await client.close()
    }

  }
}


export { MessageNow }