# JavaScript Console

[![K-067.jpg](https://i.postimg.cc/ZnsncSgn/K-067.jpg)](https://postimg.cc/D4s7vt73)

Emulacion de una consola de JavaScript usando como base el repositorio de [全能岛民](https://github.com/qndm/JavaScript-console).

### HTML
Uso de 2 **div** para:

- Configurar la instrucción a ejecutar:

    - **select** para seleccionar el tipo de instrumentación (código o expresión)
    - **input** para ingresar el código a ejecutar
    - **button** para ejecutar el código

- Mostrar el resultado de la ejecución:

    - **div** para mostrar la instrucción ejecutada y el resultado

### CSS
Configuración del tipo de letra a usar, colores de fondo y texto, tamaño, etc.

### JavaScript
#### [Script 1](html.js)
Uso de Javascript para crear las etiquetas HTML usando el método **element.insertBefore()**, **element.insertAdjacentHTML()** y **element.insertAdjacentElement()**.

#### [Script 2](index.js)
Uso del script de [全能岛民](https://github.com/qndm/JavaScript-console/blob/main/main.js) para comunicar el div de la página con las instrucciones a ejecutar en la consola usando **console.log()**.