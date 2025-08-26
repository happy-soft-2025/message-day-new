import { Router } from 'express';
import {  validationInfoNewMessage } from '../../middlewares/validation_info_message';
import { newMessage } from '../../controllers/new_message';

const addMessage = Router();

addMessage.post('/message/add', validationInfoNewMessage, newMessage)



export { addMessage }