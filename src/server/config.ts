import path from 'node:path'
import express from 'express';
import cors from 'cors';
import formData from 'express-form-data';
import { routers } from '../routers'

const server = express();

// setters
server.use(cors());
server.use(express.json());
server.use(formData.parse({ uploadDir: path.resolve(".", 'src', 'upload')  }));
server.use(formData.format());
server.use(formData.union());
server.use(formData.stream());

server.use(express.static(path.resolve('.', 'src', 'images')))

// routers
server.use(routers);


export { server }