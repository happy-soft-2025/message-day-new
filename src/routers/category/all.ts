import { Router, Request, Response } from 'express';
import { Category } from '../../database';

const all = Router();

all.get('/category/all', async (req: Request, res: Response)=>{

  const categorys: { _id: string, category: string }[] = await Category.allCategorys();

  res.json({
    sucess: true,
    categorys
  })


})

export { all }