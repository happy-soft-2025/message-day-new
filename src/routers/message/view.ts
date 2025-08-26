import { Router, Request, Response } from 'express';
import { MessageNow } from '../../database';

const view = Router();

view.get('/message/view/now', async (req: Request, res: Response)=>{

  const messageView = await MessageNow.messageView();
  
  res.json({
    sucess: true,
    message: messageView
  })

})


export { view }