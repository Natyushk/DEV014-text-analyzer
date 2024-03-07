# Analizador de Texto

## Índice

1. [Introducción](#introducción)
2. [Funcionalidades](#funcionalidades)
3. [Cómo correr el proyecto](#cómo-correr-el-proyecto)
4. [Cómo correr las pruebas](#cómo-correr-las-pruebas)
    - [Pruebas unitarias](#pruebas-unitarias)
    - [Pruebas de objetos de aprendizaje](#pruebas-de-objetos-de-aprendizaje)
    - [Pruebas end-to-end](#pruebas-end-to-end)
5. [Aseguramiento de la calidad](#aseguramiento-de-la-calidad)
6. [Contacto](#Contacto)

## Introducción

Este proyecto es un analizador de texto que permite a los usuarios ingresar un texto y calcular varias métricas sobre él en tiempo real.

![This is an alt text.](https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2018/09/banner-smartreader-herramienta-de-analisis-de-texto.png "This is a sample image.")

## Funcionalidades

- Recuento de palabras
- Recuento de caracteres (incluyendo espacios y signos de puntuación)
- Recuento de caracteres excluyendo espacios y signos de puntuación
- Recuento de números
- Suma total de números
- Longitud media de las palabras
- Funcionalidad de limpiar el contenido del cuadro de texto

## Cómo correr el proyecto

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Natyushk/DEV014-text-analyzer
```

### 1. Instala las dependencias del proyecto:
```bash
npm install
```

### 2. corre el proyecto:
```bash
npm run start
```
El proyecto estará disponible en http://localhost:3000.

## Cómo correr las pruebas
### Pruebas unitarias
Para ejecutar las pruebas unitarias, utiliza el siguiente comando:
```bash
npm run test
```
### Pruebas de objetos de aprendizaje
Puedes ejecutar las pruebas de cada grupo de objetivos de aprendizaje de manera individual con los siguientes comandos:
```bash
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
```
### Pruebas end-to-
Para ejecutar las pruebas end-to-end (E2E), utiliza el siguiente comando:
```bash
npm run test:e2e
```
## Aseguramiento de la calidad
Asegúrate de que tu proyecto cumple con los criterios mínimos de aceptación al ejecutar npm run test:oas, pasa las pruebas unitarias al ejecutar npm run test, las pruebas end to end al ejecutar npm run test:e2e, y está libre de errores de eslint al ejecutar npm run test.

## Contacto
**Nombre:** Nataly Molano

**Telefono** +593 998 393 080

**Correo:** natamolano_1@hotmail.com

**LinkedIn** https://www.linkedin.com/in/nataly-molano-cardenas-88773134/

