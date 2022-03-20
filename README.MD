# Blogs API

## Context

Blogs API is a REST API of a blog system where you can register, login, CRUD a post and define categories that will be used in posts. This API makes use of JWT for session management.

## Technologies Used

Back-End:

> NodeJS, Express, Sequelize, JWT

DataBase:

> MySQL

## Environment variables

- HOSTNAME=`host name of mysql`
- MYSQL_USER=`user name of mysql`
- MYSQL_PASSWORD=`password of mysql`
- JWT_SECRET=`secret of JWT`

## Running the Application

1. Install the dependencies

   ```bash
   npm install
   ```

2. Start the server http

   ```bash
   npm start
   ```

## Endpoints

### Register

```curl
  POST /user
```

Body example:

```json
{
  "displayName": "Lewis Hamilton",
  "email": "lewishaamilton@gmail.com",
  "password": "123456",
  "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
}
```

### Login

```curl
  POST /login
```

Body example:

```json
{
  "email": "lewishaamilton@gmail.com",
  "password": "123456"
}
```

---

**The endpoints below need the token generated when logging in or when registering to be passed in the header`Authorization`.**

### List registered users

```curl
  GET /user
```

### Listar an user by id

```curl
  GET /user/{id}
```

### Delete an user

```curl
  DELETE /user/me
```

### Register a new category

```curl
  POST /categories
```

Body example:

```json
{
  "name": "Comunicação"
}
```

### List registered categories

```curl
  GET /categories
```

### Creating a post

```curl
  POST /post
```

Body example:

```json
{
  "title": "Hollow Knight",
  "content": "Best metroidvania game ever made.",
  "categoryIds": [1, 2]
}
```

### List all posts

```curl
  GET /post
```

### List a post by id

```curl
  GET /post/{id}
```

### Search for posts where `title` or `content` is equal to `searchTerm`

```curl
  GET /post/search?q={searchTerm}
```

### Update a specific post

```curl
  PUT /post/{id}
```

Body example:

```json
{
  "title": "Hollow Knight",
  "content": "Best metroidvania game ever made."
}
```

**Note: only the author of the post can change it and it is not possible to change categoryIds.**

### Delete a specific post

```curl
  DELETE /post/{id}
```

**Note: only the author of the post can delete it.**