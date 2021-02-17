#JAVASCRIPT
Es un lenguaje Turing-completo (3a Generación). Tienen:

- Almacenamiento/consulta de datos en memoria principal (RAM).
- Control de flujo de ejecución

##NOTAS

- Los **comentarios** se ponen con `//`
- Las líneas acabarlas **siempre** con `;` aunque no es imprescindible.
- Para enlazar un archivo javascript en un html se hace dentro del body usando:
  <script type="application/javascript" src="js/main.js"></script>
  Se pone _de momento_ en el body al final de él (para que tenga cargado todo el contenido del body antes de ejecutar el js)
- Las {} encierran un "ámbito de bloque".

##VARIABLES Y CONSTANTES (son Case Sensitive)

- Constante: No cambia con el tiempo. `const PI = 3.14` Hay que asignarla en el momento de su declaración.

- Variable: Se modifica con el tiempo. `let message; message="Hola Mundo`;
  No es necesario ponerle un valor inicial. Puedes primero declararla y luego asignarla
  De momento **NO** usar `var variable` para declarar. Usar `let variable`.

##TIPOS DE DATOS (y sus operaciones)

- number: + - \* / %(resto)
- string (cadena): +(concatenar)
- boolean (true/false): &&(and) ||(or) !(not)
  (! tiene precedencia, luego && y luego ||)
- undefinef: cuando no está definida una variable.
- null: es un valor "vacío". no es lo mismo que "" que es un string de 0 caracteres.

El operador `typeof nombreVariable` Nos da el tipo de dato de la variable. (Es un **operador**, no una función)

Operadores de comparación
`==` (el `=` es el operador de *asignación*)
    Hay que tener en cuenta que hay "relajación de tipos" tambien en la comparación (2021=="2021") es true.
    <https://dorey.github.io/JavaScript-Equality-Table/>
`===` compara valor y tipo. (2021==="2021") es false. 
`>` ...



##CONDICIONALES if (expresión lógica/booleana)
if (A comp B) { } else {}
Si lo que hay entre () es true, se hace lo que hay en el primer{}.
En caso de que no se cumpla lo que hay entre () se hace lo que hay en el segundo{}

Evaluación perezosa: En una comparación el orden del condicional es importante. Primero deberíamos poner lo que creamos que puede ser true y que puede hacer que el rendimiento sea mayor. **Importante para entrevistas técnicas**

