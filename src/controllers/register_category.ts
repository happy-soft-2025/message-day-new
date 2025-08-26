import { Request, Response, NextFunction } from 'express';
import { Category } from '../database'

async function registerCategory(req: Request, res: Response, next: NextFunction){

  try {

    const nameCategory: string = req.body.category.replaceAll(' ', '_');
  
    if(nameCategory === ''){
      res.json({
        sucess: false,
        message: "found category name"
      })
      return
    }

    const existCategory: boolean = await Category.existCategory(nameCategory);

    if(existCategory){
      res.json({
        sucess: false,
        message: 'exist category'
      })

      return
    }

    const registeCategory: boolean = await Category.newCategory(nameCategory)

    if(!registeCategory){
      res.json({
        sucess: false,
        message: 'error registred in database'
      })
      return
    }

    res.json({
      sucess: true,
      message: 'cadastred'
    })


  }
  catch (err) {

    res.json({
      sucess: false,
      message: 'server error'
    })

  }

}

export { registerCategory }