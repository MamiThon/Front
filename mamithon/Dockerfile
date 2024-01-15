FROM node:lts-alpine
# /\ image

# définit le dossier 'app' comme dossier de travail
WORKDIR /Front

# copie 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json ./

# installe les dépendances du projet
RUN npm install

# copie les fichiers et dossiers du projet dans le dossier de travail
COPY . .

# construit l'app pour la production en la minifiant
RUN npm run build

EXPOSE 8080