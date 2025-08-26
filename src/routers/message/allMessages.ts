import { Router } from 'express';
import { returnMessage  } from '../../controllers/return_message'


const allMessages = Router()
allMessages.get('/message/all/:category/:page', returnMessage)


export { allMessages }