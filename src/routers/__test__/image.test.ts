import path from 'node:path';
import { describe, it, expect, beforeAll} from 'vitest';
import request from 'supertest';
import { server } from '../../server/config';
import { Category, Image  } from '../../database';

let imageId: number;

beforeAll(async ()=>{
  const existCategory: boolean = await Category.existCategory('test_2')

  if(!existCategory){
    await Category.newCategory('test_2')
  }

})



describe("test routers images", async ()=>{

 it("test router image upload", async ()=>{

    const upload = await request(server)
    .post('/image/upload')
    .attach('image', path.resolve('.', 'src', 'routers', '__test__', 'assets', 'image', 'image.png'))
    .field('category', 'test_2')

    expect(upload.body.sucess).toBe(true);
    expect(upload.statusCode).toBe(200);

  })


  it('test router image count', async ()=>{

    const count = await request(server)
    .get('/image/count')

    expect(count.statusCode).toBe(200)
    expect(count.body.sucess).toBe(true)
    expect(count.body.images >= 0).toBe(true)

  })


  it('test router image download', async ()=>{

    const id = await Image.allImages('test_2', 0)
    imageId = id[0].id;

    const download = await request(server)
    .get(`/image/download/${imageId}`)

    expect(download.statusCode).toBe(200)

  })


  it('test router image all', async ()=>{

    const allImages = await request(server)
    .get('/image/all/test_/0')

    expect(allImages.statusCode).toBe(200)
    expect(allImages.body.sucess).toBe(true)

  })


  it("test router image delete", async ()=>{

    const deleteImage = await request(server)
    .delete('/image/delete')
    .send({ id: imageId })

    expect(deleteImage.body.sucess).toBe(true)
    expect(deleteImage.statusCode).toBe(200)

  })

})