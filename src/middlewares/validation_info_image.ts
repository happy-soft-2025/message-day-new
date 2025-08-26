import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import { Request, Response, NextFunction } from 'express';
import { Category } from '../database';

async function validationInfoImage(req: Request, res: Response, next: NextFunction){

  if(!req.body.category){
    await fs.unlink(req.body.image.path);
    
    res.json({
      sucess: false,
      message: "not found category"
    })
    return
  }

  if(!req.body.image){
    res.json({
      sucess: false,
      message: "not found image"
    })
    return
  }
  
  req.body.nameCategory = req.body.category.replaceAll(" ", "_");
  req.body.newNameImage = `${crypto.randomUUID()}_image.png`;

  const existCategorySave: boolean = await Category.existCategory(req.body.nameCategory);

  if(!existCategorySave){
    await fs.unlink(req.body.image.path);

    res.json({
      sucess: false,
      message: "not exist category"
    })
    
    return
  }

  next()
}

export { validationInfoImage }