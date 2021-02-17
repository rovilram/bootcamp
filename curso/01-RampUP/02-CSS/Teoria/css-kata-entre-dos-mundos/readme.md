![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png "logotipo de The Bridge")

# :shinto_shrine: - Entre dos mundos #

## Introducción ##

Adolfo, "el golfo", hijo de Rodolfo, el primero de su nombre, lleva haciendo páginas estáticas desde hace muchos años. Su madre, "Manolilla, La pilla", le enseñó el maravilloso arte de la programación "viejuner ol'style".

Se cometieron muchas tropelías antaño, así que no te asustes ni intentes reparar.

A la hora de imprimir, ni los colores, ni algunas imágenes son apropiadas para imprimir. Sólo el contenido.

Tu tarea, será crear las reglas para que la página siguiente se pueda imprimir de la manera más óptima.

## Requisitos ##

- HTML5

- CSS3

- Media Queries

### ¡Echa un vistazo a esto! ###

[Modo impresión en el navegador](https://css-tricks.com/can-you-view-print-stylesheets-applied-directly-in-the-browser)

Elige una de estas tres opciones y descarga el código:

- VerdeQueTeQuieroVerde: [Previsualización](https://www.html.am/templates/downloads/bryantsmith/greenblade) - [Descarga](https://www.html.am/templates/downloads/bryantsmith/greenblade.zip)

- Moyabe: [Previsualización](https://www.html.am/templates/downloads/bryantsmith/mountainouslysimple) - [Descarga](https://www.html.am/templates/downloads/bryantsmith/mountainouslysimple.zip)

- La sabana de Ana: [Previsualización](https://www.html.am/templates/downloads/bryantsmith/barrensavannah/) - [Descarga](https://www.html.am/templates/downloads/bryantsmith/barrensavannah.zip)

Copia los archivos necesarios para que se pueda ver correctamente la versión web. Ignora el resto.

## Iteraciones ##

0. Crea un archivo que se cargue con posterioridad al archivo principal de estilos, así lo sobreescribirá.

   Existen varias maneras de aplicar _"media queries"_:

   Definiendo el tipo de media en la importación de la página:

    ```html
      <link rel="stylesheet" type="text/css" href="home.css" media="screen" />
      <link rel="stylesheet" type="text/css" href="print.css" media="print" />
    ```

   O bien incluir las _"media queries"_ tradicionales

   ```css
      @media screen {
        /* Contenido del fichero home.css */
      }

      @media print {
        /* Contenido del fichero print.css */
      }
    ```

1. Eliminar contenido poco importante o accesorio

    Cuando se imprime una página web lo que el usuario desea tener impreso es el contenido, no la presentación visual de la página como logotipos e imágenes decorativas. Además, los elementos de la interfaz de usuario como menús, listas desplegables y botones no tienen sentido cuando se imprime una página web porque no se puede interactuar con ellos.

2. Ajustar el contenido que nos queda

    Debemos tener en cuenta en cuál es la mejor manera de aprovechar el dispositivo donde se van a visualizar los datos.

3. Usa medidas absolutas

    Aunque el tamaño del papel es fijo, y puedes usar medidas absolutas como cm, mm, etc, es posible seguir utilizando una distribución fluida.

    También puedes usar media queries, especialmente unas tan útiles como las de orientación, que sirven tanto para el viewport como para elementos paginados:

    ```css
      @media print and (orientation: portrait) {
          /* Reglas para imprimir en formato vertical */
      }

      @media print and (orientation: landscape) {
          /* Reglas para imprimir en formato apaisado */
      }
    ```

4. Texto, colores e imágenes de fondo

  Aunque el navegador elimina los colores e imágenes de fondo, ten en cuenta que debe haber suficiente contraste con el fondo.

  Pasar a negro el color de la letra, eliminar sombras de texto y/o bloques es algo a revisar.

5. Convertir los Enlaces para mostrar la URL usando solo CSS

    Como los enlaces no funcionan, puede interesarnos mostrar las rutas de dichos enlaces:

    ```css
      a[href]:after {
        content: " (" attr(href) ")";
      }
    ```
