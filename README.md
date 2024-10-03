<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

<p>
  Crear una API RESTful que maneje un sistema de gestión de tareas (Task Management System) utilizando NestJS. La API debe permitir realizar operaciones CRUD sobre tareas y gestionar usuarios.
</p>

## Project setup

- [Fork] genera una copia del proyecto en tu cuenta de github mediante un Fork
- Configurar las variables de entorno
```bash
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_USER=test
DB_PASSWORD=test123
DB=taskmanager

STAGE=dev

JWT_SECRET=YOUR_SECRET_KEY_HERE
JWT_TOKEN_AUDIENCE=localhost:3000
JWT_TOKEN_ISSUER=localhost:3000
JWT_ACCESS_TOKEN_TTL=3600
```
- Instalar dependencias
```bash
$ yarn install
```
- Documentacion de la API
Para poder visualizar la documentación en la UI de swagger, solo es necesario correr la aplicación en modo desarrollador yarn run start para poder tener la siguiente url http://localhost:3000/api

