# DécouverteNodeJS

## Installation

Node.js et npm doivent être installés.

```bash
sudo apt install nodejs npm -y
```

Pour vérifier l'installation :

```bash
node -v
npm -v
```

## Lancer le serveur

Dans le dossier du projet :

```bash
node --watch app.js
```

Le serveur utilise le port `8085`.


## Authentification

| Endpoint | Type d'authentification | Description |
|---|---|---|
| `/basic-auth` | Basic Authentication | Authentification avec un nom d'utilisateur et un mot de passe |
| `/api-key` | API Key | Authentification avec une clé API |
| `/bearer-token` | Bearer Token | Authentification avec un token Bearer |

### Basic Authentication

La requête doit contenir un header `Authorization` de type Basic.

```text
Authorization: Basic ...
```

### API Key

La requête doit contenir une clé API valide dans le header prévu par le serveur.

### Bearer Token

La requête doit contenir :

```text
Authorization: Bearer TOKEN
```


Joshua Jeffredo
