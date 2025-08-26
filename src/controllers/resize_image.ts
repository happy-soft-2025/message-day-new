import path from 'node:path';
import fs from 'node:fs/promises';
import { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';


async function resize(pathImageUpload: string, outputSaveImage: string, category: string){

  await sharp(pathImageUpload)
  .toFile(`${path.resolve(".", "src", "upload")}/${outputSaveImage}`);

  await fs.unlink(path.resolve('.', 'src', 'upload', pathImageUpload));
}


async function resizeImage(req: Request, res: Response, next: NextFunction){
  
  try {

    await fs.mkdir(path.resolve('.', 'src', 'images', req.body.nameCategory), {recursive: true });
    await resize(req.body.image.path, req.body.newNameImage, req.body.nameCategory);

  }
  catch (err) {

    res.json({
      sucess: false,
      message: "error in progress convertion image"
    })

    return
  }
  finally {

    next();

  }

}

export { resizeImage }