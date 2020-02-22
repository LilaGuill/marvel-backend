<h1 align="center">Marvel backend</h1>

## Server

**Dependencies**

- Express
- Express-formidable
- Mongoose
- Crypto-js
- Uid2
- Cors
- Dotenv

**Architecture**

- Route marvel:

  - search comics : axios request to Marvel api
  - get characters : axios request to Marvel api
  - get comics by id : axios request to Marvel api
  - marvel api : https://developer.marvel.com/

- Route user :
  - signup : create crypted password and token, both are saved in mongoDB Database
  - login : decrypted password

## Running the project

Clone this repository :

```
git clone https://github.com/LilaGuill/marvel-backend
cd marvel-backend
```

Install packages :

```
npm install
```

When installation is complete, run the project with:

```
npx nodemon index.js
```

## Client

- HTTP request with axios (get, post)
- Hooks (useState, useEffect, useContext)
- React Router Dom
- Handle Cookies

## Overview

  <p align="center">
    <img width="500" src="https://github.com/LilaGuill/marvel-frontend/blob/master/public/screen.png"alt="capture-1">
  </p>

<p align="center">
  Demo:<a href="https://marvel-lg.netlify.com//" target="_blank"> https://marvel-lg.netlify.com/</a>
</p>

## Marvel Client

<a href="https://github.com/LilaGuill/marvel-frontend.git">https://github.com/LilaGuill/marvel-frontend.git</a>

## Deployment

- Client deployed with Netlify
- Server deployed with Heroku
- MongoDb database hosted on Mlab

## Contact

<a href="https://www.linkedin.com/in/lila-guillermic-66542476/" target="_blank">My Linkedin Profil</a>
