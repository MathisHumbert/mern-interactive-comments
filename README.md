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
