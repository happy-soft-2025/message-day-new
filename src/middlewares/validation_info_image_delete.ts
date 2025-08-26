import path from 'node:path';
import fs from 'node:fs/promises';
import { Request, Response, NextFunction } from 'express';
import { Image } from '../database'


async function validInfoImageDelete(req: Request, res: Response, next: NextFunction){

  if(!req.body.id){
    res.json({
      sucess: false,
      message: 'found id'
    })
    return
  }

  const existImageDatabase = await Image.searchImage(req.body.id)


  if(!existImageDatabase[0]?.id){
    res.json({
      sucess: false,
      message: 'not exist image in database'
    })
    return
  }

  const pathImage: string = existImageDatabase[0].path;
  const nameImage: string = pathImage.slice(pathImage.lastIndexOf('/')+1, pathImage.length);
  
  const listImagesCategory: string[] = await fs.readdir(path.resolve('.', 'src', 'images', existImageDatabase[0].category));
  const existImageFolder: boolean = listImagesCategory.some( image => image === nameImage );

  if(!existImageFolder){
    res.json({
      sucess: false,
      message: 'not exist image folder'
    })
    return
  }



  req.body.imageDelete = existImageDatabase[0]
  next();

}

export { validInfoImageDelete }