# Ejercicios con `localStorage` y Módulos de JavaScript

Este repositorio contiene un proyecto simple que simula la funcionalidad de una tienda de productos de Apple, utilizando `localStorage` para almacenar preferencias de productos y **JavaScript Modules** para organizar el código. Está inspirado en la página oficial de Apple y tiene como objetivo enseñar el uso de `localStorage` y la modularización en JavaScript.

## Características

- **Almacenamiento de preferencia de productos en `localStorage`**: Permite guardar el producto favorito del usuario de manera persistente, para que esté disponible incluso después de cerrar o recargar la página.
- **Modularización con JavaScript Modules**: El código está organizado en módulos, lo que permite una mejor organización y reutilización del mismo.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos:

### Archivos Clave:

- **`productModule.js`**: Contiene la lista de productos disponibles y una función para listar los productos.
- **`storageModule.js`**: Maneja la lógica de guardar y recuperar el producto favorito del `localStorage`.
- **`main.js`**: Archivo principal que conecta los módulos y ejecuta la lógica principal de la aplicación.

### Ejemplos

Guardar Producto Favorito en localStorage

```javascript
// Guardar un producto Favorito
saveFavoriteProduct("MacBook Pro");
```

```javascript
// Mostrar el producto favorito guardado en localStorage
getFavoriteProduct();
```
