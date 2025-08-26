import { randomUUID } from 'node:crypto';
import { describe, it, expect, beforeAll} from 'vitest';
import { Category } from '../category';

const nameClass: string = randomUUID();

beforeAll(async ()=>{
  await Category.newCategory(nameClass)
})

describe('test class category', ()=>{

  it('test method allCategory', async ()=>{
    const listCategory = await Category.allCategorys();
    expect(listCategory instanceof Array).toBe(true);
  })

  it('test method exist category', async ()=>{
    const existCategory: boolean = await Category.existCategory(nameClass)
    expect(typeof existCategory).toBeTruthy()
  })

  it('test method remove category', async ()=>{
    const removeClass: boolean = await Category.removeCategory(nameClass)
    expect( typeof removeClass).toBeTruthy()
  })

})