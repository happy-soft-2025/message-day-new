import { Router } from 'express';
import { validInfoImageDelete } from '../../middlewares/validation_info_image_delete';
import { deleteImageAll } from '../../controllers/delete_image';

const deleteImage = Router();

deleteImage.delete("/image/delete", validInfoImageDelete, deleteImageAll)


export { deleteImage }