import path from 'node:path';
import fs from 'node:fs/promises';
import { Request, Response } from 'express';
import { Image, Category, Message } from '../database';


async function deleteCategory(req: Request, res: Response){
  
  const category: string = req.body.category.replaceAll(' ', '_')

  try {
    
    const responseDeleteCategory =  await Category.removeCategory(category);
    await Image.deleteAllImagesCategorys(category);
    await Message.deleteAllMessagesCategorys(category);
    
    if(!responseDeleteCategory){
      res.json({
        sucess: false,
        message: "not deleted category in database"
      })
      return
    }

    const listCategoyFolder: string[] = await fs.readdir(path.resolve('.', 'src', 'images', category))

    for await ( let image of listCategoyFolder ){
      await fs.unlink(path.resolve('.', 'src', 'images', category, image))
    }

    res.json({
      sucess: true,
      message: 'category deleted sucess'
    })

    return


  }
  catch (err) {

    res.json({
      sucess: true,
      message: 'delete category found files'
    })

  }


}

export { deleteCategory }