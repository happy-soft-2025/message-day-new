import { Request, Response } from 'express';
import { Category, Message  } from '../database'


async function returnMessage(req: Request, res: Response){

  try {

    const { category, page } = req.params;
    
    if(!category || !page){
      res.json({
        sucess: false,
        message: 'request info category or page'
      })
      return
    }

    const existCateory: boolean = await Category.existCategory(category);

    if(!existCateory){
      res.json({
        sucess: false,
        message: 'not exist category'
      })

      return
    }

    const messages = await Message.allMessages(Number(page), category)
    
    res.json({
      sucess: true,
      messages: messages
    })

    


  }
  catch (err){


  }


}

export { returnMessage }