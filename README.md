# Typing Test

Este mini proyecto es un tipong test, para comenzar a escribir, hay que precionar el boton start, la pruba termina cunado se completa de escribir la oracion. Tambien se puede abortar la prueba precionando nuevamente el boton de start.
<br>
para correr el programa recomendamos ejecutar siguiente comando dentro de la carpeta typing_test (donde esta este archivo)

**IMPORTANTE**
tenemos un problema que a veces ocurre, y es que la pagina no gestion bien los eventos **la primera vez** que el servidor (localhost) sirve la pagina, para solucionarlo solo hay que refrescar la pagina. Una vez refrescado, la pagina funcion correctamente.

"use client";
```bash
npm run dev
```
luego se puede abrir el navegador en el localhost con puerto 3000
[http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Explicacion
el conponente principal es Typing box, ya que en este se gestiona todo el tema de los eventos del teclado, las palabras por minuto y cuando esta o no activa la prueba.<br>
<br>
El segundo componente mas importante es el de Letter, ya que nos permite poder colorear las letras con colores que nosotros queramos, de forma que la frase que salga sorteada, es representada como un conjuto de Letters.
<br><br>
Otros componente importante es un simple boton basico, que usamos para cambiar los estados de la prueba con el objetivo de saber si esta corriendo o no.
<br><br>
Hay otro componente que es la palabra, en un principio, las palabra estarian conformadas por letras, sin embargo preferimos no hacer mas compljo este tema, de forma que no la usamos para nada en el codigo, pero lo dejamos por si en alguno momento queremos seguir trabajando en este proyecto.

**integrantes**
* Benjamin Liberona
* Nicolas Goldstain



