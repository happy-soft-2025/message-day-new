import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import { server } from '../../server/config';
import { Category } from '../../database';


beforeAll(async ()=>{

  const existCategory: boolean = await Category.existCategory('test');

  if(!existCategory){
    await Category.newCategory("test")
  }

})

let idMessage: string;

describe("test routers message", ()=>{

  it('test route message now', async ()=>{

    const messageNow = await request(server)
    .post('/message/new/now')
    .send({ message: "message update" })

    expect(messageNow.statusCode).toBe(200)
    expect(messageNow.body.sucess).toBe(true)
  })


  it('test route message view ', async ()=>{

    const messageNow = await request(server)
    .get('/message/view/now')

    expect(messageNow.statusCode).toBe(200)
    expect(messageNow.body.sucess).toBe(true)

  })


  it('test route message add', async ()=>{

    const messageNow = await request(server)
    .post('/message/add')
    .send(
      { 
        category: 'test', 
        message: "message update" 
      }
    )

    expect(messageNow.statusCode).toBe(200)
    expect(messageNow.body.sucess).toBe(true)
  })


  it('test route message all', async ()=>{

    const messageNow = await request(server)
    .get('/message/all/test/0')

    idMessage = await messageNow.body.messages[0].id;

    expect(messageNow.statusCode).toBe(200)
    expect(messageNow.body.sucess).toBe(true)
    expect(messageNow.body.messages.length >= 0).toBe(true)
  })


   it('test route remove message ', async ()=>{

    const messageNow = await request(server)
    .delete(`/message/delete/${idMessage}`)

    expect( messageNow.statusCode ).toBe(200)
    expect( typeof messageNow.body.sucess === 'boolean').toBe(true)

  })

})