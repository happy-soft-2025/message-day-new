import { Router, Request, Response } from 'express';
import { Message } from '../../database';

const count = Router();

count.get("/message/count", async (req: Request, res: Response)=>{

  const count = await Message.messageCount()

  res.json({
    sucess: true,
    message: count
  })

})

export { count }