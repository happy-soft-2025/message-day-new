import 'dotenv/config';
import path from 'node:path';
import fs from 'node:fs/promises';
import { server } from './config';


server.listen(process.env.PORT || 3000, async ()=> {

  await fs.mkdir(path.resolve('.', 'src', 'upload'), { recursive: true });
  await fs.mkdir(path.resolve('.', 'src', 'images'), { recursive: true });

  if(process.env.DEV){
    console.log("server init ✅", process.env.DATABASE_URL);
  }


})