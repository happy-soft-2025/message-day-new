import { Request, Response } from 'express';
import { Message } from '../database'


async function newMessage(req: Request, res: Response){
  const responseRegistredMessage: boolean = await Message.newMessage(req.body.message, req.body.category.replaceAll(' ', '_'))

  if(!responseRegistredMessage){
    res.json({
      sucess: false,
      message: "not save message"
    })
    return
  }

  res.json({
    sucess: true,
    message: 'message save'
  })

}


export { newMessage }