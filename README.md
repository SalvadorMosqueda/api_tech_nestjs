<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

<p>
  API RESTful que se encarga de administrar tareas, cuenta con 2 modulos, uno para el crud de tareas, y otro para la gestion basica de usuarios, se uso de modo basico el Jwt, tambien cuenta el proyecto con proteccion de rutas, validacion de datos entrantes, y tambien menejo de algunos errores 
</p>

## Project setup

<p>variables de entorno utilizadas <p>
```bash
PORT=3001
DB_HOST=localhost
DB_PORT=3306
DB_USER=test
DB_PASSWORD=test123
DB_NAME=taskmanager

STAGE=dev

JWT_SECRET=SECRET
JWT_ACCESS_TOKEN_TTL=3600




## Conexión a la base de datos
<p>se dio seguimiento con mysql, asi que es necesario tener una localhost corriendo con los datos de la variable de entorno </p>

- Iniciar la base de datos
<p>Verificar que el archivo .env esté configurado correctamente</p>


- Instalar dependencias

```bash
$ yarn install
````

- Correr el programa

```bash
$ npm run dev
```

- Documentación de la API
  Para poder visualizar la documentación en la UI de swagger, solo es necesario correr la aplicación en modo desarrollador yarn run start para poder tener la siguiente url http://localhost:3001/api
