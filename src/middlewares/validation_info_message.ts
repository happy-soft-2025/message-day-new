import { Request, Response, NextFunction } from 'express';
import { Category  } from '../database';

async function validationInfoNewMessage(req: Request, res: Response, next: NextFunction){

  if(!req.body.category || !req.body.message){

    res.json({
      sucess: false,
      message: "require category or message"
    })
    return
  }

  const existCategory: boolean = await Category.existCategory(req.body.category.replaceAll(" ", "_"))

  if(!existCategory){
    res.json({
      sucess: false,
      message: "not category exist"
    })
    return
  }

  next();

}

export { validationInfoNewMessage }