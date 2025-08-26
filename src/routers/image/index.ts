import { Router } from 'express';
import { upload } from './upload';
import { deleteImage } from './delete';
import { count } from './count';
import { all } from './all';
import { download } from './download';

const image = Router();

image.use(upload);
image.use(deleteImage);
image.use(count);
image.use(all);
image.use(download);

export { image };