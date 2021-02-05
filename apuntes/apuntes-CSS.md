#APUNTES CSS
https://github.com/TheBridge-FullStackDeveloper/css
TIPS:
* NO maquetar con TABLAS, NO maquetar con FLOAT, para todo eso TENEMOS FLEXBOX
* Para quitar los márgenes por defecto de los navegadores. Usar normalice.css.
* HAY UN MARGEN EN H1 por encima. Para quitarlo margin-top:0; (¿usar reset.css?).  o limpiar con `* {padding:0; margin:0; boxsizing:border-box};`
* No poner si es posible atributo height
* Es recomendable SÍ usar width
* PARA BOXED LAYOUT D: envolver todo el contenido de la web en un div.wrapper
    `.wrapper {        margin: 0 auto;        width: 960px;    }`
  En el contenedor principal para toda la web es el único sitio donde vamos a poner 'auto' en vez de poner una medida relativa (20% por ejemplo), para que recalcule el ancho y 
  Además en este .wrapper vamos a poner la anchura en absoluto,  en vez de relativa como es lo recomendado. Este **960px** está motivado por el resposible design. porque es múltiplo de 2 y 3 y es más facil de dividir. 
* PARA BOXED FULL-WIDTH (el recomendado actualmente): Metemos un wrapper en cada uno de las secciones.
  Con eso conseguimos que la página tenga diseño al 100% del ancho pero con un ancho fijo de 960px por ejemplo.

*Para definir de forma relativa los anchos, tener en cuenta calcular siempre el 100% del ancho del contenedor.
Por ejemplo cuando definamos los elementos de un menú con 3 enlaces:
`nav.main-menu a {
    padding: 10px 3%;
    width: 26.9%  /*Debería ser un 27% (pero le sale un espacio entre medias, que ya veremos porque)*/
}` **27+3*6(2 márgenes por 3 elementos <a> del menú )=100**
El espacio entre medias me dijeron que era por esto:
"Es del inline-block. Y en este hilo de stackoverflow (vuestro amigo para siempre) lo resuelven así: https://stackoverflow.com/questions/5078239/how-do-i-remove-the-space-between-inline-inline-block-elements
Y también señalan que hoy en día se usa “flex-box”, justo lo que hemos dado hoy en clase, y así vemos su importancia"
Vamos que con display:flex asunto solucionado.

* visibility:hidden == opacity:0<>display:none. Cuando se hace invisible sigue existiendo.
Si está con display:none NO "existe".

##Medidas: Queremos medidas ABSOLUTAS para las alturas y RELATIVAS para los anchos
ABSOLUTAS: px
RELATIVAS: %, para fuentes (em(relativa a la fuente de cada elemento), rem(relativa a la fuente del elemento raiz))

Esto es una regla de estilo:
`selector {propiedad:valor;}  /* comentario */`

enlazo el css desde el html (en el head, puede ser donde quieras, mejor al final):


##selector
Es lo que quiero cambiar.
Para delimitar el selector:
    `a{}` son todos los elementos a
    `nav a {}` Son todos los a que están en un nav (seán directos o no)
    `.clase {}` selecciona las `class="clase"` de nuestro html  
    `#id {}` selecciona los elementos `id=id` de nuestro html (el id no se puede repetir en un html)
Una clase es más específica que una gerarquía y más que un selector general
https://flukeout.github.io/ Juego para practicar selectores
CHEAT LIST: https://www.freecodecamp.org/news/css-selectors-cheat-sheet/


##TIPOS DE ELEMENTOS
ELEMENTOS DE BLOQUE: Ocupan el 100% del ancho, a no ser que le digamos lo contrario
La altura la "calcula" en función del contenido (NO USAR la propiedad height)
ELEMENTOS INLINE: textos, span
Se usa rara vez, tan solo cuando se usan etiquetas que son inline por sí mismas.
ELEMENTOS INLINE-BLOCK: Se les puede definir el ancho, pero comparten la linea.
 

##POSITION: Se sale del modelo de la caja y del orden de posicionamiento normal. (position:static; es el predefinido)
* position:fixed;   Hace que el elemento tenga como padre directamente el viewport.
Sirve por ejemplo para header, footer, una barra o chat que siempre queramos en un sitio determinado, un backToTop visible...
Pierde la anchura de su contenedor. Por ello hay que ponerle la anchura que queramos (por ejemplo width: 100%)
Luego hay que posicionarlo donde queramos con: top/bottom Y left/right
Lo que marquemos con el position se pone siempre delante (hay que ver lo que tapa. Por ejemplo en un header fixed habría que poner un margin al main para que no se tape la primera parte.)
Eso NO se puede cambiar con z-index (están en otro plano)
Por ejemplo un header
header{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
} 

//TODO: Mirar origen de coordenadas de cada "position"

*position: absolute; El elemento se sale del modelo de caja, y se posiciona con un top/right, left/right respecto al (0,0) (esquina superior izquierda). El padre en este caso va a ser el <body>
Se diferencia del "fixed" en que se mueve con el scroll.
El espacio que ocupaba ese elemento, ahora queda libre.

*position: relative; Se sale del modelo de caja, pero su padre sigue siendo su padre. Se le puede posicionar desde la ubicación actual.
El espacio que ocupaba ese elemento, queda ocupado (espacio en blanco)

*Padre relativo / hijo absoluto. El hijo va a calcular su posición desde el body, pero teniendo en cuenta la posición nueva de su padre (se va a mover con él). MIRAR ESTO PARA EL MENÚ DESPLEGABLE.
Se usa esto cuando queremos tener un elemento que tenga una ubicación exacta siempre respecto al padre.

*position:sticky; (a partir de CSS3) Es una combinación de "absolute" y "fixed". Se comporta normal hasta que llega a la posición que le demos (con top y demás), y ahí se queda pegado.

##FLEXBOX: Así es como hay que maquetar.
Es una forma de colocar un contenedor(container) y sus hijos(items)
Cada item puede se a la vez ser container de otros items.
Contenedor flex: display:flex;
https://flexboxfroggy.com/#es

propiedades del contenedor:
display:flex;
justify-content: para justificar horizontalmente
  flex-start: Alinea elementos al lado izquierdo del contenedor.
  flex-end: Alinea elementos al lado derecho del contenedor.
  center: Alinea elementos en el centro del contenedor.
  space-between: Muestra elementos con la misma distancia entre ellos.
  space-around: Muestra elementos con la misma separación alrededor de ellos.
align-items: para alinear verticalmente;
  flex-start: Alinea elementos a la parte superior del contenedor.
  flex-end: Alinea elementos a la parte inferior del contenedor.
  center: Alinea elementos en el centro (verticalmente hablando) del contenedor.
  baseline: Muestra elementos en la línea base del contenedor
  stretch: Elementos se estiran para ajustarse al contenedor.
flex-direction: define el orden de los elementos.
  row: Elementos son colocados en la misma dirección del texto.
  row-reverse: Elementos son colocados en la dirección opuesta al texto.
  column: Elementos se colocan de arriba hacia abajo.
  column-reverse: Elementos se colocan de abajo hacia arriba.
flex-wrap: para distribuir los elementos en el contenedor
  nowrap: Cada elemento se ajusta en una sola línea.
  wrap: los elementos se envuelven alrededor de líneas adicionales.
  wrap-reverse: Los elementos se envuelven alrededor de líneas adicionales en reversa.
flex-flow: asocia flex-direction y flex-wrap.
align-content: Para establecer como están separadas varias lineas.
  flex-start: Las líneas se posicionan en la parte superior del contenedor.
  flex-end: Las líneas se posicionan en la parte inferior del contenedor.
  center: Las líneas se posicionan en el centro (verticalmente hablando) del contenedor.
  space-between: Las líneas se muestran con la misma distancia entre ellas.
  space-around: Las líneas se muestran con la misma separación alrededor de ellas.
  stretch: Las líneas se estiran para ajustarse al contenedor.


propiedades del elemento contenido:
  order: da el nº de orden de un determinado elemento (por defecto es 0) (puede ser menor o mayor que cero)
  align-self: para alinear un elemento individual igual que se hace con todos con `align-items`



##TRANSICIONES CSS
La ponemos en la regla de estado inicial.
transition: background-color 2s, color 1.5s;
La propiedad que queremos modificar tiene que ser interpolable(se pueden calcular los puntos intermedios entre los dos estados inicial y final)
Podemos poner **all**, para cualquier propiedad interpolable.
Hay un tercer atributo (opcional) que es la "aceleración" de la transformación: ease,...
Se ponen todas las transiciones en la misma linea, separados por ","
Ahora siempre que cambiemos esas propiedades interpolables se va a realizar la transición.

##TRANSFORMACIONES CSS
para escalar (scale), rotar (rotate) sobre un eje de rotación y trasladar, un elemento.
`transform: rotate(-90deg);` rota en el eje de las z, puede ser x con rotateX, por ejemplo...
Se pone en la regla de estilo donde queremos hacer la transformación, por ejemplo un hover.
Si en el estado inicial le ponemos un `transition: transform, 10s;` por ejemplo, aplicamos una transformación a la transición.
`transform: scale(2)` Escala un elemento. si es >1 se amplia y si es <1 se reduce.
`transform: matrix()` Mediante una matriz matemática les aplicas la transformación.
`transform: translate(-40px,-80px )` Esto mueve 40 pixeles a la derecha y 80 pixeles hacia *arriba*
`transform: rotate(-90deg) scale(2)` Para hacer dos transiciones a la vez. No se ponen con ',' sino con espacios. pero cuidado que el orden importa.

##ANIMACIONES CSS
animate.css (librería con animaciones CSS)
Es un guión de transiciones.
  @keyframes nombreAnimación {
    0% {
      transform: none;
    }
    100% {
      transform: rotate(-90deg) scale(2)
    }
  }

luego se asocia ese guión a un elemento:
  #id {
    animation: nombreAnimacion 2s;
  }

  Así se aplica a la carga de la pagina. Si queremos que sea varias veces ponemos el número después del tiempo de duración de la animación: animation: `nombreAnimacion 2s infinite;`

  Podemos iniciar la animación parada:
  animation-play-state: paused;

  y luego por ejemplo en:
  #id:hover {
    animation-play-state: running;
  }

  Si queremos que el estado inicial y final sea iguales, tenemos que definirlo en el guión:
    @keyframes nombreAnimación {
    0% {
      transform: none;
    }
    50% {
      transform: rotate(-90deg) scale(2)
    }
    100% {
      transform: none;
    }
  }


##RESPONSIVE WEB DESIGN (Diseño Web Adaptativo) alistapart.com/article/responsive-web-design
Técnicas para conseguir que un interface de aplicación pueda presentarse en distintos anchos de pantalla.
Se usan **breakpoints** (puntos de ruptura), que son los anchos posibles en los que centramos nuestro diseño.
en función del ancho del viewport aplicamos unas reglas de estilo sobre nuestros elementos u otros.
Se pueden ver breakpoints comunes en <www.mediaqueri.es>
Diseño fluido: El contenido se adapta al ancho del contenedor continuamente. Así como lo hace normalmente el texto.
También hay que tener en cuenta algunos determinados dispositivos que tienen características distintas en su viewport (las distintas densidades de pixel de los apple por ejemplo). Para eso sirven cosas similares al `meta content="width=device-width"`
Mobile First: es una metodología como hacer el diseño adaptativo, empezando desde el pequeño al mayor. Desde el diseño más básico al mayor.
El diseño adaptativo se hace desde CSS, el HTML **NO** va a cambiar.

En mobile first vamos a empezar poniendo el estilo del dispositivo menos ancho, luego vamos definiendo los breakpoints con:
`@media screen and (min-width: 361px)`
  el dispositivo normalmente es `screen` aunque puede ser print, u otro medio donde representar la información.
  al ser mobile first marcamos el `min-width` del breakpoint


  Para diseño fluido:
    *Los textos hay opciones para que el texto se divida como queremos cuando hay una palabra demasiado grande
    * los img, video e iframe se ponen al 100% de su contenedor. Con width=100%