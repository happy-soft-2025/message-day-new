import { Request, Response, NextFunction } from 'express';
import { Category } from '../database'

async function validationInfoDeleteCategory(req: Request, res: Response, next: NextFunction){

  const category: string = req.body.category.replaceAll(" ", "_")

  if(!req.body.category){
    res.json({
      sucess: false,
      message: 'to send category'
    })

    return
  }

  const existCategoryDatabase: boolean = await Category.existCategory(category);
  
  if(!existCategoryDatabase){
    res.json({
      sucess: false,
      message: 'not resgited in database'
    })
    return
  }

  next();
}

export { validationInfoDeleteCategory }