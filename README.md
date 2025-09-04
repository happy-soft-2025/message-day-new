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

## Routers ☁️

### Category
- [category/add](#categoryadd)
- [category/all](#categoryall)
- [category/delete](#categorydelete)

### Image
- image/upload
- image/count
- image/all/:category/:page
- image/delete
- image/download/:id

### Message
- message/add
- message/all/:category/:page
- message/count
- message/new/now
- message/delete/:id
- message/view/now

<br>

# Introdução as Rotas
## Category/add
Rota responsavel por adicionar uma categoria .

🏷️ **POST**

Rota precisa que seja enviado pelo corpo da Requisição **Body**

![](./docs/images/01.png)

Resposta do cadastro com sucesso

![](./docs/images/02.png)

Resposta se a categoria ja foi cadastrada

![](./docs/images/03.png)

## category/all

Rota responsavel por mostrar todas as rotas cadastradas

🏷️ **GET**

![](./docs/images/04.png)

## category/delete

Rota responsavel por remover a categoria cadastrada

🏷️ **DELETE**

Rota precisa que seja enviado pelo corpo da Requisição **Body**

![](./docs/images/05.png)

Resposta se ja foi associada alguma imagem a essa categoria

![](./docs/images/06.png)

se a categoria foi criada com o intuido de teste ou ate mesmo com algum error de escrita ela pode ser excluida porem a Resposta vai ser outra

![](./docs/images/07.png)

se tentar excluir a categoria que não existe 

![](./docs/images/08.png)














