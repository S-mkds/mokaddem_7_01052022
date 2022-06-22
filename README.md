# Projet n°7 OpenClassrooms 

Télécharger le repository et suivez les instructions ci-dessous.

## prérequis

* Installer Node.js
* Installer Express
* Installer Vue.js
* Crée une Database MongoDB


### Installation et démarrage du Backend

* Dans le dossier backend, crée un dossier: images 
* Dans le dossier backend, crée un fichier .env et renseignez:
-  MONGODB_CONNECT = Connectez-vous à votre DATABASE MongoDB avec votre lien de connection ici
-  TOKEN_SECRET = Votre token secret ici 
-  CRYPTO_SECRET_KEY = Un code pour votre cryptojs ici
-  ADMIN_EMAIL = "Votre EMAIL Admin ici"
-  ADMIN_PSEUDO = "Votre PSEUDO Admin ici"
-  ADMIN_PASSWORD = "Votre MDP Admin ici" 

* Ouvrez votre terminal
* Allez dans le dossier backend : `cd mokaddem_7_01052022\backend` 
* Installez toutes les dépendances du projet : `npm install`
* Démarrez le serveur Node.js : `nodemon server.js`


#### Installation et démarrage du Frontend

* Ouvrez votre terminal
* Allez dans le dossier frontend : `cd mokaddem_7_01052022\frontend` 
* Installez toutes les dépendances du projet : `npm install`
* Démarrez l'application : `npm run start`

##### Testez l'application
* Ouvrez votre navigateur et allez sur : `http://localhost:4200/`


###### Compiler & Minifier pour une production

* npm run build