import { Router } from 'express';
import { returnImages } from '../../controllers/return_images';

const all = Router();

all.get('/image/all/:category/:page', returnImages);


export { all }