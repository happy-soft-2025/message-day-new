import { Router } from 'express';
import { messageNow } from './now';
import { view } from './view';
import { addMessage } from './add';
import { allMessages } from './allMessages';
import { remove } from './remove';
import { count } from './count';

const message = Router();

message.use(messageNow);
message.use(view);
message.use(addMessage);
message.use(allMessages);
message.use(remove);
message.use(count);


export { message }