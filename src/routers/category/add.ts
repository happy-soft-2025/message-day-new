import { Router } from 'express';
import { registerCategory } from '../../controllers/register_category';

const add = Router();


add.post('/category/add', registerCategory)

export { add }