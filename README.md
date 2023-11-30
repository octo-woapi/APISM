# OCAC : Formation APISM - Sécuriser et Manager son API


## Getting started : first install

1. Cloner le projet
2. À la racine du projet, lancer `podman-compose up -d`
3. Depuis le navigateur, accéder à l'url [http://localhost:8080](http://localhost:8080)
4. Se logger (bouton 'Login' en haut à droite) via email (utiliser le compte `apprenant0@octo.com`)
5. Depuis le navigateur, accéder à l'url [http://localhost:8025](http://localhost:8025)
6. Ouvrir l'email reçu et clicker sur le bouton : **Félicitation ! Vous êtes loggé !**


## Pré-requis

Pour éviter les problèmes de CORS, vous aurez probablement besoin d'installer une extension sur votre navigateur :
- https://docs.hoppscotch.io/documentation/getting-started/setup#locally-served-apis
- https://github.com/hoppscotch/hoppscotch-extension



## Informations utiles

### URLs utilisées lors du TP
| service                   | url                   |
|---------------------------|-----------------------|
| API                       | http://localhost:3000 |
| SMTP admin (Mailhog)      | http://localhost:8025 |
| API platform (Hoppscotch) | http://localhost:8080 |

### Compte d'accès

apprenant0@octo.com


1. `curl http://localhost:3000/formations`


## Commandes utiles

Reset podman local environment :
```sh
podman system prune --all --force && podman rmi --all
podman rmi $(podman images -qa) -f
podman volume rm --all --force
```