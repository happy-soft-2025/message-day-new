import { Router } from 'express';
import { validationInfoImage } from '../../middlewares/validation_info_image';
import { resizeImage } from '../../controllers/resize_image';
import { saveImageCategory } from '../../controllers/save_image_category';


const upload = Router();

upload.post('/image/upload', validationInfoImage, resizeImage, saveImageCategory);

export { upload }