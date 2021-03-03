#HTML 1.0

##Referencia HTML
<w3schools.com>
<developer.mozilla.org>
<tutorialspoint.com>
no son la oficial pero es mucho más cómoda que w3.org
##Webs útiles
caniuse.com nos dice si determinado elemento html es válido para diversos navegadores
web.dev Página de google para medir rendimiento y seo

##validador HTML
https://validator.w3.org/

##HISTORIA:
    WEB 1.0: Contenido
    WEB 2.0: Contenido generado por usuario (dinámica)
    WEB 3.0: Semántica (a partir HTML5)

##ETIQUETAS HTML

    ###CONTENIDO

        ####COMENTARIOS     <!-- -->

        #####TEXTO

            h1, h2, h3,... (encabezados gerárquicos)

            <p> párrafos NO PONER NUNCA TEXTO SIN FORMATEAR (sin estar etiquetado)

            <br> Se puede usar sin problemas para poner salto de lineas entre texto. Siempre que el cambio de linea no tenga significado semántico

            LISTAS Son tanto para ordenar de forma visual, como para clasificar de forma gerárquica y semántica.
                LISTA ORDENADA:     <ol><li></li></ol>
                LISTA DESORDENADA:  <ul><li></li></ul>
                Se pueden anidar unas listas dentro de otras.

        #####IMAGEN
            <img src="rutaRelativaArchivo" alt="texto alternativo a la foto y tambien sirve para SEO"> src y alt son atributos OBLIGATORIOS. Es un elemento de BLOQUE

        #####MEDIA
            `<video src="">Texto alternativo al Video</video>` Sirve para video alojado. Es un elemento de BLOQUE.
                autoplay --> Para que empiece a reproducir el video (puede que no funcione en chrome por seguridad)
                controls --> muestra los controles del video
            <audio src=""></audio> Lo mismo que para video.

        #####RECURSOS EXTERNOS (youtube, spotify...): Hay que incluirlo según la forma que ellos deciden como hacerlo.
            <iframe src="" frameborder="0"></iframe>
            <embed src="" type="">

        #####ENLACES  <a href="direccionEnlazada">Texto del Enlace</a>

    ###CONTINENTE
        TABLA: <table> tiene dentro las filas <tr> que dentro tiene las columnas <td>
            <table>
              <tr>
                  <td></td>
                </tr>
            </table>
        Atributo para unir columnas: colspan="2"
        Atributo para unir filas: rowspan="2"

        MODELO DE CAJA
        Viewport: es la parte visible de nuestra página. No es lo mismo que la ventana(no incluye el navegador por ejemplo.) En nuestro html está representado por el body
        
        La parte donde podemos "dibujar" en nuestro navegador es el ancho del viewport x un alto infinito.
        DIMENENSIONES DE UNA CAJA (Contenedor)
        ALTO: Suma de los altos de los contenidos
        ANCHO: Es función de si el elemento es de bloque (El ancho es 100% del contenedor-márgenes, padding...), o de linea (El ancho es el mismo que el contenido). (ese comportamiento se puede modificar)

        PADDING: espacio del contenedor hacia su contenido. (El contenedor "roba" a su contenido el padding en ancho (ya que el ancho máximo de su contenedor es el de su padre)). El padding vertical hace que aumente el alto del contenedor (el hijo(contenido) no se ve afectado)
        MARGIN: espacio del contenedor hacia su padre. Reduce el ancho del contenido, y hace crecer el alto del contenedor padre.
        Hay que tener en cuenta que al robar espacio al contenido, si el contenido no se adapta, puede llegar el momento que se salga del contenedor.   
        BORDER: igualmente roba ancho al contenido y aumenta el tamaño de su contenedor padre.




    ###FORMULARIOS
            <form action="URI que va a procesar el formulario" method="Es el proposito de los datos"></form>

            <input> son cada uno de los elementos del formulario
                <input type="submit" value="Texto botón">   Botón
                <input type="text" name="" id="elemento"> caja de texto. Name es donde se va a guardar lo de la caja.
                    placeholder para poner un texto de guía dentro de la caja
                    required para campo obligatorio (válido para todos los input)
                    pattern para validar según un patrón
                <label for="elemento"></label>  Es para complementar el input (el texto de fuera de la caja).
                                        for se usa para "unir" el label con un determinado input#id.
                <input type="password" name="" id=""> Igual que el "text" pero que "oculta" el contenido
                
                <textarea name="" id=""></textarea> Es como un input pero de tamaño más grande. permite saltos de linea en el texto introducido. Cuidado de no meter nada entre las etiquetas del textarea ya que lo que meta lo guarda dentro de la caja (aunque sean espacios)

                <input type="radio" name="" id="" value="">TEXTO    Es importante que tengan el mismo id todos aquellos que son para elegir entre ellos. Se guarda el valor de "value" en la variable de "name".
                    checked Para dejar marcado uno de ellos.
                
                <input type="checkbox" name="" id="" value=""> Igual que el radio, pero el value da un poco igual que se ponga ya que va a llegar a backend solo si está marcado o no.
                
                <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>

                <input list="browsers" name="myBrowser" /></label>
                <datalist id="browsers">
                    <option value="Chrome">
                    <option value="Firefox">
                </datalist>

            INPUT CON SIGNIFICADO SEMÁNTICO: por ejemplo (hay muchos más)
            <input type="email" name="" id="">
            <input type="color" name="" id="">
            <input type="date" name="" id=""> tienen atributos por ejemplo min y max
            <input type="number" name="" id=""> tienen atributos por ejemplo min y max
            <input type="tel" name="" id="">

        ###WEB SEMANTICA https://www.w3schools.com/html/html5_semantic_elements.asp
        `<header>[HEADER]</header>
        <nav>[NAV]</nav>
        <main>
        <section>
            <article>[ARTICLE]</article>
            <article>[ARTICLE]</article>
        </section>
        <section>
            <article>[ARTICLE]</article>
        </section>
        </main>
        <footer>
            [FOOTER] <small>letra pequeña "contrato"</small>
        </footer>`

        Los contenedores semánticos TIENEN que tener un ENCABEZAMIENTO.
        Se pueden encadenar unos dentro de otros sin problema, siempre que tengan sentido semántico y nos venga bién para la maquetación.







