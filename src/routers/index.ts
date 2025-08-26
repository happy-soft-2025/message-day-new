import { Router, Request, Response, NextFunction } from 'express'
import { image } from './image';
import { category } from './category';
import { message } from './message';

const routers = Router();

routers.use(image);
routers.use(category);
routers.use(message);


routers.use(function(req: Request, res: Response, next:NextFunction ){
  res.json({
    sucess: false,
    message: 'page not faund 404'
  })
  return
})

export { routers }