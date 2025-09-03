import path from 'node:path';
import fs from 'node:fs/promises';
import { Request, Response } from 'express';
import { Image } from '../database'


async function deleteImageAll(req: Request, res: Response){
  
  const sucessDeleteImageDataBase: boolean = await Image.deleteImage(req.body.imageDelete.id);

  console.log(req.body.imageDelete)

  if(!sucessDeleteImageDataBase){
    res.json({
      sucess: false,
      message: 'error delete image database'
    })

    return
  }

  await fs.unlink(path.resolve('.', 'src', 'images', req.body.imageDelete.path))
  .catch(err => {

    res.json({
      sucess: false,
      message: 'error in delete image folder'
    })

  })


  res.json({
    sucess: true,
    message: 'delete sucess'
  })

}


export { deleteImageAll }