import path from 'node:path';
import fs from 'node:fs/promises';
import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import { server } from '../../server/config';


beforeAll( async ()=>{

  await fs.mkdir(path.resolve('.', 'src', 'images', 'test_1'), { recursive: true })

} )


describe('test routers category', ()=>{

  it('test route category add', async ()=>{

    const add = await request(server)
    .post('/category/add')
    .send({ category: 'test_1' })

    expect(add.body.sucess).toBe(true)
    expect(add.statusCode).toBe(200)

  })


  it('test route category all', async ()=>{

    const all = await request(server)
    .get('/category/all')

    expect(all.body.sucess).toBe(true)
    expect(all.statusCode).toBe(200)
    expect(all.body.categorys.length >= 0).toBe(true)
    
  })


  it('test route category remove', async ()=>{

    const remove = await request(server)
    .delete('/category/delete')
    .send({ category: 'test_1' })

    expect(remove.body.sucess).toBe(true);
    expect(remove.statusCode).toBe(200);

  })

})