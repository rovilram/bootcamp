#FIREBASE
<https://console.firebase.google.com/>
Es una insfrastructura en la nube que nos va a permitir hacer aplicaciones web iniciales sin conocimiento de backend. Vamos a poder hacer aplicaciones **serverless**, donde la infraestructura de servidor ya viene totalmente creada.

Nosotros nos vamos a centrar en el servicio **realtime database**.

Primero tenemos que hacer el proyecto. Una vez allí creamos nuestra *web app* (el frontend con el que vamos a consumir el servicio).

Con eso nos va a dar el SDK, que es la *librería* que tenemos que usar para conectar nuestra aplicación web al servicio y que debemos pegar en nuestro código.
Hay que tener en cuenta que el código que te da es el *core* de firebase, además hay que poner la librería de *firebase database*

Ahora vamos y creamos nuestra base de datos:
<https://console.firebase.google.com/u/2/project/bootcamp-urban-monsters/database>
Decidimos donde queremos el servidor y si queremos en *locked mode* o *test mode*. De momento elegimos test mode porque es más facil para aprender, pero en producción hay que usar el locked ya que sino nuestros datos serían facilmente accesibles. (eso se puede cambiar cambiando "now" por false en la etiqueta *rules*)


firebase database es una base de datos jerárquica que tipo documental. Es un arbol jerárquico en el que todo es un objeto JS (JSON). Todo cuelga desde un nodo inicial (*bootcamp-urban-monsters-default-rtdb:* en mi caso).


firebase mantiene un canal de comunicación bidireccional abierto, de forma que los cambios en la nube se reflejarán en nuestra aplicación y viceversa.
