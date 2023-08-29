# Proyecto Democracia 🕊️ - Plataforma de Financiamiento para Fiscales de DAO

> :warning: **¡Importante!** Este proyecto es una demostración y no debe ser utilizado en entornos de producción. El desarrollador no es responsable del uso que se le dé a este código.


## Descripción

Bienvenido al proyecto **Democracia**. Este repositorio contiene una aplicación basada en Next.js, NextAuth, Prisma y PostgreSQL, diseñada para permitir el registro de ciudadanos interesados en financiar una Organización Autónoma Descentralizada (DAO) que respalde a fiscales en el desarrollo de sus actividades. Los fiscales registrados en la plataforma podrán reclamar sus beneficios en forma de tokens.

## Características Clave

- **Registro de Ciudadanos**: Los ciudadanos pueden crear cuentas en la plataforma proporcionando información básica como nombre, correo electrónico y contraseña.
- **Autenticación Segura**: La autenticación de usuarios se maneja utilizando NextAuth, lo que garantiza un proceso seguro y confiable.
- **Financiamiento de DAO**: Los ciudadanos pueden contribuir con fondos para financiar la DAO que a su vez respaldará a los fiscales en sus tareas.
- **Registro de Fiscales**: Los fiscales interesados pueden registrarse en la plataforma utilizando su información personal y detalles relacionados con su trabajo.
- **Distribución de Tokens**: Los fiscales registrados pueden reclamar sus beneficios en forma de tokens, que pueden usarse en la plataforma o intercambiarse según sea necesario.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web modernas con renderizado del lado del servidor (SSR) y renderizado del lado del cliente (CSR).
- **NextAuth**: Librería de autenticación que simplifica flujos seguros de autenticación en aplicaciones Next.js.
- **Prisma**: ORM (Mapeo Objeto-Relacional) para interacción con la base de datos y modelado de datos declarativo.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional de código abierto y potente.

## Configuración

1. **Clonar el Repositorio**: `git clone <URL_DEL_REPOSITORIO>`
2. **Instalar Dependencias**: `cd democracia` y luego `npm install` o `yarn add`
3. **Configurar la Base de Datos**: Actualiza la cadena de conexión en `.env.*env*`.
4. **Ejecutar Migraciones**: `yarn migrate:dev`
5. **Iniciar la Aplicación**: `yarn dev`

## Contribución

¡Apreciamos tus contribuciones! Sigue estos pasos:

1. Haz un *fork* y clona en tu máquina.
2. Crea una nueva rama: `git checkout -b nombre-de-la-rama`.
3. Realiza cambios y verifica que todo funcione correctamente.
4. Haz commit y envía un *pull request* detallado.

## Licencia

Este proyecto está bajo una Licencia Pública [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html).

## Contacto

Si tienes preguntas o necesitas ayuda, contáctanos en [correo electrónico de soporte].

¡Gracias por contribuir a **Democracia**!
