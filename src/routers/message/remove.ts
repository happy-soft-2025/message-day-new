import { Router } from 'express';
import { deleteMessage } from '../../controllers/delete_message';

const remove = Router();


remove.delete('/message/delete/:id', deleteMessage);


export { remove }