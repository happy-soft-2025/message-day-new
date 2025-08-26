import path from 'node:path';
import fs from 'node:fs/promises';
import { Request, Response, NextFunction } from 'express';
import { Image } from '../database';


async function moveImageCategory(pathUplaod: string, folderCategory: string){
  await fs.copyFile(pathUplaod, folderCategory)
  await fs.unlink(pathUplaod);
}

async function saveImageCategory(req: Request, res: Response, next: NextFunction){

 try {

   await moveImageCategory(
    path.resolve('.', 'src', 'upload', req.body.newNameImage),
    path.resolve('.', 'src', 'images', req.body.nameCategory, req.body.newNameImage)
  );

  const saveImageRespomse: boolean = await Image.registerImage(
    req.body.nameCategory, 
    `${req.body.nameCategory}/${req.body.newNameImage}`,
  );

  if(!saveImageRespomse){
    res.json({
      sucess: false,
      message: "not rigiste in database"
    })
    return
  }

  res.json({
    sucess: true,
    message: 'image save'
  })

  return
 }

 catch (err) {
  res.json({
    sucess: false,
    message: "error save image"
  })

 }

}

export { saveImageCategory }