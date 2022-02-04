# MERN Interactive Comments

## Créer les bases du projet

Créer le dossier:

```sh
cd dekstop
mkdir mern-interactive-comments
cd mern-interactive-comments
```

Créer React:

```sh
mkdir client
cd client
npx create-react-app .
```

- Supprimé tous les fichiers dans src
- Créer index.js et App.js
- Import ReactDOM et App dans index.js et render App

Créer NodeJS:

```sh
cd ..
mkdir server
cd server
npm init -y
npm i express
```

- Créer un fichier server.js

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('back end');
});

const port = 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
```

## Créer les routes du back

- Créer le dossier models et créer un mongoose.Schema
- Créer le dossier controllers

```js
const Comment = require('../models/Comments');

const getComments = (req, res) => {
  res.send('get comments');
};

const createReply = (req, res) => {
  res.send('create reply');
};

const deleteComment = (req, res) => {
  res.send('delete comment');
};

const toggleUpvote = (req, res) => {
  res.send('toggle upvote');
};

module.exports = { getComments, createReply, deleteComment, toggleUpvote };
```

- Créer le dossier routes

```js
const express = require('express');
const router = express.Router();

const {
  getComments,
  createReply,
  deleteComment,
  toggleUpvote,
} = require('../controllers/comments');

router.get('/', getComments);
router.patch('/upvote/:id', toggleUpvote);
router.route('/:id').patch(createReply).delete(deleteComment);

module.exports = router;
```

- Set up Postman pour tester les routes
- Créer le seveur sur MongoDB
- Créer le serveur sur not app

```js
const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
```

- Connecter le server sur not app

```js
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
```

- Créer le fichier populate.js pour ajouter le fichier json comments.js à notre base de donées

```sh
node populate
```

## Connecter le back avec le front

- Ajouter à package.json du client le proxy du server

```js
"proxy":"http://localhost:5000"
```
