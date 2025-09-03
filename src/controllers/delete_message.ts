import { Request, Response } from 'express';
import { Message } from '../database'

async function deleteMessage(req: Request, res: Response){

  if(!req.params.id){
    res.json({
      sucess: false,
      message: "request id"
    })
    return
  }


  const responseDeleteMessage: boolean = await Message.deleteMessage(req.params.id)

  if(!responseDeleteMessage){
    res.json({
      sucess: false,
      message: "not exist message"
    })
    
    return
  }

  res.json({
    sucess: true,
    message: "message deleted"
  })

}


export { deleteMessage }