import { Router, Request, Response } from 'express';
import { Image } from '../../database';

const count = Router();

count.get('/image/count', async (req: Request, res: Response)=>{
  const images = await Image.counImage();

  res.json({
    sucess: true,
    images: images
  })

})

export { count }