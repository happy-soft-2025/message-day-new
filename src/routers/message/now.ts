import { Router, Request, Response } from 'express';
import { MessageNow } from '../../database';

const messageNow = Router();

messageNow.post('/message/new/now', async (req: Request, res: Response)=>{

  if(req.body.message === ""){
    res.json({
      sucess: false,
      message: "not found message"
    })
    return
  }

  const responseUpdate: boolean = await MessageNow.addMessageNow(req.body.message);

  if(!responseUpdate){
    res.json({
      sucess: false,
      message: 'error message not save database'
    })
    return
  }

  res.json({
    sucess: true,
    message: "update completed"
  })

})


export { messageNow }