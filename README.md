# .env
- DATABASE_URL

# message day api

## Install and started

1. npm i
2. npm run dev

## Test
1. npm i
2. npx prisma migrate reset
3. npm run test

## build
1. npm i
2. npm run build

## Routers ☁️

### Image
- image/upload
- image/count
- image/all/:category/:page
- image/delete
- image/download/:id

### Message


### Category


### 🏷️ image/upload

**Method : post**

⬆️ **Request**


- 🖼️ **image** = path image
- 🟰 **category** = name category

⬇️ **Response**

✅ ***sucess***

![image](./docs/images/1.png)

❌ ***lock of category***

![image](./docs/images/2.png)

❌ ***lock of image***

![image](./docs/images/3.png)


### 🏷️ image/count
**Method : get**

✅ ***sucess***

![image](./docs/images/4.png)



### 🏷️ image/all/:category/:page

⬆️ **Request**
 - 🟰 category = name category
 - 📖 page = number page 

 ✅ ***sucess***

 ![image](./docs/images/5.png)

 ### 🏷️ image/delete

 ⬆️ **Request**

 ✅ ***sucess***

 ![image](./docs/images/6.png)

 ❌ ***image not found***

 ![image](./docs/images/7.png)

❌ ***image not registred in database***

![image](./docs/images/8.png)

 








