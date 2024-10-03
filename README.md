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

## Requerimientos Funcionales

### 1. Tareas

Cada tarea debe tener las siguientes propiedades:
- `id`: Identificador único (generado automáticamente).
- `title`: Título de la tarea (string).
- `description`: Descripción de la tarea (string).
- `state`: Estado de la tarea (`"open"`, `"in_progress"`, `"done"`).
- `status`: Estado del usuario (`"0"`, `"1"`), 0 es Eliminado, default 1.
- `createdAt`: Fecha y hora de creación de la tarea (timestamp).
- `updatedAt`: Fecha y hora de la última actualización de la tarea (timestamp).
- `deletedAt`: Fecha y hora en la que la tarea fue eliminada (null si no ha sido eliminada).
- `userId`: Relación con el usuario que creó la tarea.

**Endpoints requeridos:**
- `GET /tasks`: Obtener la lista de tareas. Debe excluir las tareas con estado `"deleted"`.
- `POST /tasks`: Crear una nueva tarea.
- `PUT /tasks/:id`: Actualizar una tarea existente (excepto si está en estado `"deleted"`).
- `DELETE /tasks/:id`: Marcar una tarea como eliminada (borrado lógico, actualizando `status` a `"deleted"` y `deletedAt` con la fecha y hora actual).

### 2. Usuarios

Implementar autenticación básica con **JWT** para usuarios. Cada usuario debe tener las siguientes propiedades:
- `id`: Identificador único (generado automáticamente).
- `username`: Nombre de usuario (string, único).
- `password`: Contraseña (string, encriptada).
- `status`: Estado del usuario (`"0"`, `"1"`), 0 es Eliminado, default 1.
- `createdAt`: Fecha y hora de creación del usuario (timestamp).
- `updatedAt`: Fecha y hora de la última actualización del usuario (timestamp).
- `deletedAt`: Fecha y hora en la que el usuario fue eliminada (null si no ha sido eliminada).

**Endpoints requeridos:**
- `POST /auth/signup`: Registrar un nuevo usuario.
- `POST /auth/login`: Autenticar a un usuario y devolver un token JWT.

Solo los usuarios autenticados podrán gestionar sus propias tareas.


**Notas sobre el borrado lógico:**
- El campo `deletedAt` debe ser nulo si la tarea no está eliminada.
- El campo `status` debe cambiar a `"0"` cuando se marque como eliminada.
- El borrado de una tarea o usuario no debe eliminar el registro de la base de datos; en su lugar, debe actualizar los campos `status` y `deletedAt`.

## Criterios de Evaluación

1. **Correctitud técnica:**
   - La API cumple con los requisitos funcionales (CRUD de tareas, autenticación de usuarios).
   - Uso adecuado de NestJS, incluyendo módulos, servicios, controladores, y providers.

2. **Seguridad:**
   - Uso adecuado de JWT para asegurar rutas.
   - Encriptación de contraseñas.

3. **Estructura y estilo del código:**
   - El código está organizado de manera clara, utilizando las mejores prácticas de NestJS.
   - Uso de DTOs para la validación de datos de entrada.

4. **Borrado lógico:**
   - El borrado de tareas y usuarios debe ser lógico (usando los campos `deletedAt` y `status`).
     
5. **Swagger: Documentacion correcta:**
   - El código está documentado de manera clara, utilizando las herramientas proporcionadas por swagger.
     
## Instrucciones de Entrega

1. El proyecto debe subirse a un repositorio Git (GitHub, GitLab, etc.) y se debe proporcionar acceso al repositorio. [Mediante el fork]
2. El repositorio debe incluir un archivo `README.md` con las instrucciones para:
   - Explicación de cualquier tecnología utilizada.
   - Cualquier informacion adicional al proyecto
   
