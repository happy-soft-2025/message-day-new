import { Request, Response, NextFunction } from 'express';
import { Image } from '../database';

async function returnImages(req: Request, res: Response, next: NextFunction){

  try {

    const { category, page } = req.params;

    const images = await Image.allImages(category, Number(page));

    res.json({
      sucess: true,
      images
    })
  
    return

  } 
  catch (err) {
    res.json({
      sucess: false,
      images: []
    })
  }

}

export { returnImages }