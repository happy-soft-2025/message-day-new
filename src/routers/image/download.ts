import path from 'node:path';
import { Router, Request, Response } from 'express';
import { Image } from '../../database';


const download = Router();

download.get('/image/download/:id', async (req: Request, res: Response)=>{
  
  if(!req.params.id){

    res.json({
      sucess: false,
      message: 'request id image'
    })
    return

  }


   await Image.searchImage(Number(req.params.id))
   .then(async  image  => {

    res.download(path.resolve(".", 'src', 'images', image[0].path))
    return

   })
  .catch(( err )=> {

    res.json({
      sucess: false,
      message: 'error search image'
    })

  } )



})

export { download }