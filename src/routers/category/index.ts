import  { Router } from 'express';
import { add } from './add';
import { all } from './all';
import { remove } from './remove';

const category = Router();

category.use(add);
category.use(all);
category.use(remove);


export { category }