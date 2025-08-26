import { Router } from 'express';
import { validationInfoDeleteCategory } from '../../middlewares/validation_info_delete_category';
import { deleteCategory } from '../../controllers/delete_category';

const remove = Router()

remove.delete('/category/delete', validationInfoDeleteCategory, deleteCategory )


export { remove }