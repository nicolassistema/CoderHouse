// Resumen Clase 5 - Thiago Mowszet



// Recuerden que si tienen una duda ademas de los tutores, tenemos el grupo de: 
// WhatsApp: https://chat.whatsapp.com/GVLyCIi6CCj8IFDGDic4GZ 
// Servidor de Discord: https://discord.gg/33WcmnUCxz




/*

DOM - Document Object Model

Nos permite acceder a los elementos del documento HTML.

Con JS lo empleamos para acceder y modificar de forma dinamica elementos de nuestra interfaz.

Cada etiqueta es un objeto al que podemos llamar NODO, dentro del NODO padre tenemos los nodos HIJOS.

*/


// Todos estos objetos son accesibles mediante el objeto global document. Ejemplos  ⬇

document.body; // Acceder al body del documento HTML.
document.head; // Acceder al head del documento HTML.


// Acceso por objeto document

console.dir(document); // Muestra todos los objetos del documento HTML.
console.dir(document.head) // Muestra el objeto head del documento HTML.
console.dir(document.body) // Muestra el objeto body del documento HTML.


/*

TIPOS DE NODOS
DOM define 12 tipos de nodos, los mas usados son: 

    1. Document = Nodo raiz del que derivan todos los demas nodos.
    2. Element = Representa cada una de las etiquetas HTML. Puede contener atributos y derivar otros nodos de él.
    3. Attribute (Attr) = Representa cada uno de los atributos de una etiqueta HTML. Es decir, uno por cada par atributo=valor.
    4. Text = Nodo que representa el texto dentro de una etiqueta HTML.
    5. Comment = Nodo que representa un comentario dentro de una etiqueta HTML.

*/



// Acceder a los NODOS - Los mas usados son ⬇

getElementById() // Accede a un elemento por su ID.
getElementsByClassName() // Accede a un elemento por su clase. Retorna un array con todos los elementos.
getElementsByTagName() // Accede a un elemento por su etiqueta. 



/*

Modificar nodos

innerText nos permite modificar el texto dentro de un elemento.
Es decir, acceder y/o modificar el contenido textual del algun elemento del DOM.

*/


// Codigo HTML de referencia
//<h1 id="titulo"> <h1> Hola Mundo </h1> 

let titulo = document.getElementById('titulo'); // Accedemos al elemento por su ID.
console.log(titulo.innerText); // Muestra el texto dentro del elemento. --> Hola Mundo

// Modificamos el texto del elemento.

titulo.innerText = 'Hola Genios'; // Modificamos el texto del elemento.
console.log(titulo.innerText); // Muestra el texto modificado. --> Hola Genios




// innerHTML nos permite modificar el contenido HTML dentro de un elemento.

// Codigo HTML de referencia
//<div id="contenedor"> Hola Mundo </h1>

let container = document.getElementById('contenedor'); // Accedemos al elemento por su ID.

// Modificamos el contenido HTML del elemento.

container.innerHTML = `<h2> Hola Mundo" </h2>`; // Modificamos el contenido HTML del elemento.

/*

//Resultado en el DOM
<div id=”contenedor”>
    <h2>Hola mundo!</h2>
    <p>Lorem ipsum</p>
</div>

*/



// className nos permite acceder y modificar la clase de un elemento.

// Codigo HTML de referencia
//<div id=”contenedor”></div>

let container = document.getElementById("contenedor")
// cambio el código HTML interno
container.innerHTML = "<h2>Hola mundo!</h2>"
// cambio el atributo class
container.className = "container row"

/*
Resultado en el DOM
<div id="contenedor” class=“container row”>
    <h2>Hola mundo!</h2>
</div>
*/




// Agregar nodos

document.createElement() // Crea un elemento HTML.

// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");

// Insertar HTML interno
parrafo.innerHTML = "Esto es un parrafo";

// Añadir el nodo Element como hijo de body
document.body.append(parrafo); // append() nos permite agregar un nodo como hijo de otro.



// Quitar nodos

let parrafo = document.getElementById("parrafo1");

//Elminando el propio elemento
parrafo.remove(); // remove() nos permite eliminar un nodo del DOM.

let paises = document.getElementsByClassName("paises");
//Eliminando el primer elemento de clase paises
paises[0].remove() // Accedemos al primer elemento de la lista de paises y lo eliminamos.




// Obtener datos de inputs - Accediendo a la propiedad value() obtenemos o modificamos datos de un formulario HTML desde JS

//CODIGO HTML DE REFERENCIA
//<input id = "nombre" type="text">
//<input id = "edad" type="number">

//CODIGO JS
document.getElementById("nombre").value = "Thiago";
document.getElementById("edad").value = 21;


// Crear opciones desde un array

//Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre = document.getElementById("personas");

//Array con la información a agregar
let personas = ["HOMERO", "MARGE", "BART", "LISA", "MAGGIE"];

//Iteramos el array con for...of
for (const persona of personas) {
    let li = document.createElement("li"); //Creamos un nodo <li>
    li.innerHTML = persona //Agregamos el contenido del array al nodo <li>
    padre.appendChild(li); //Agregamos el nodo <li> al padre
}





// Plantillas de Texto


let producto = { id: 1, nombre: "Arroz", precio: 125 }; // Objeto con datos de prueba

let concatenado = "ID : " + producto.id + " - Producto: " + producto.nombre + "$ " + producto.precio; // Concatenamos los datos del objeto en una cadena de texto. Menos legible
let plantilla = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`; // Plantilla de texto con interpolación de variables. Más legible

//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla);




// Plantillas literales e innerHTML


let producto2 = { id: 2, nombre: "Fideos", precio: 55 }; // Objeto con datos de prueba
let contenedor = document.createElement("div"); // Creamos un nodo <div>

//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>  Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;

//Agregamos el contenedor creado al body
document.body.appendChild(contenedor);




// Crear un elemento desde un Objeto.

const productos = [
    { id: 1, nombre: "Arroz", precio: 125 },
    { id: 2, nombre: "Fideo", precio: 70 },
    { id: 3, nombre: "Pan", precio: 50 },
    { id: 4, nombre: "Flan", precio: 100 }
];

for (const producto of productos) {
    let contenedor = document.createElement("div"); // Creamos un nodo <div>

    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor); // Agregamos el contenedor creado al body
}




// querySelector() nos permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores de CSS.
// querySelectorAll() Nos permite obtener una colección de elementos.

// Codigo HTML de referencia

//<div id=”contenedor”>
//    <p class=”texto”></p>
// </div>

// puedo seleccionar la etiqueta <p> siguiendo la sintaxis de CSS para selectores:
let parrafo = document.querySelector("#contenedor p") // Selector de forma Descendiente, primero el id luego el elemento <p>

// seleccionar sólo el contenedor por id con #
let contenedor = document.querySelector("#contenedor") // Selector de ID

// o por clase:
parrafo = document.querySelector(".texto") // Selector de clase 


/*
Selectores de CSS por si no lo vieron nunca o para recordar : 

Universal = * --Selecciona todo

De Tipo = seleccion por elemento (h1, button, etc)

Por Clases = nombre de la clase que agregamos al elemento (se hace con .[nombre de clase])

ID = se usa #[nombre del id], tiene que ser unico para cada elemento.

Por Atributo = se usa [(nombre del atributo="valor")] 

Descendiente = Se selecciona el elemento contenedor y despues el elemento a modificar.

Pseudoclases = añadimos selectores a los elementos
*/




/*

Eventos en JS

Los eventos son la manera que tenemos de controlar las acciones de los usuarios, definir un comportamiento de la pagina o 
aplicacion cuando se produzcan.

JS nos permite asignar una funcion a cada uno de los eventos. Son nombrados Event Handlers o manejadores de eventos.
Ante cada evento se ejecuta una funcion asociada al mismo.


Los eventos suceden constantemente en el navegador. JS nos permite escuchar eventos sobre elementos seleccionados.
Cuando escuchamos uno de estos eventos, se ejecuta la funcion que nosotros definimos como respuesta.
A esto lo definimos como Event Listener.

*/



// Como definir un evento

addEventListener() // Funcion que nos permite agregar un evento a un elemento. El primer parametro es el evento que queremos escuchar y el segundo es la funcion que se ejecuta cuando se produce el evento.

// Ejemplo de evento click

// Codigo HTML de referencia.

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Mi primer App</title>
//   </head>
//   <body>
//     <h2>Coder House</h2>
//     <button id="btnPrincipal">CLICK</button>
// <script>
let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)
function respuestaClick() {
    console.log("Respuesta evento");
}
{/* </script>
  </body>
</html> */}



// Tambien podemos emplear funciones anonimas para definir una funcion que se ejecuta cuando se produce un evento.

// Codigo HTML de referencia.

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Mi primer App</title>
//   </head>
//   <body>
//     <h2>Coder House</h2>
//     <button id="btnPrincipal">CLICK</button>
//     <script>
let boton2 = document.getElementById("btnPrincipal")
boton2.onclick = () => { console.log("Respuesta 2") }
//     </script>
//   </body>
// </html>



// Tambien podemos hacerlo desde HTML, aunque nos conviene mas usar la funcion anonima o el primer ejemplo.
// Esta ultima opcion no se recomienda para proyectos en produccion.
<input type="button" value="CLICK2" onclick="alert('Respuesta 3');" />




/*

Eventos Comunes

1. Mouse -- Se producen cuando el mouse se mueve sobre un elemento.
2. Teclado -- Se producen por la interacción del usuario con el teclado. 
3. Change -- Se activa cuando se detecta un cambio en el valor del elemento.
4. Input -- Se usa cuando queremos queremos ejecutar una funcion cada vez que se tipea sobre el elemento.
5. Submit -- Se activa cuando el formulario es enviado.
6. Otros


*/



// 1. Mouse

mousedown() // Se produce cuando el mouse se presiona sobre un elemento.
mouseup() // Se produce cuando el mouse se suelta sobre un elemento.
mousemove() // Se produce cuando el mouse se mueve sobre un elemento.
click() // Se activa después de mousedown o mouseup sobre un elemento válido


// Codigo HTML de referencia.

//<button id="btnMain">Click</button>

let boton3 = document.getElementById("btnMain")
boton3.onclick = () => { console.log("Click") }
boton.onmousemove = () => { console.log("Movimiento") }



// 2. Teclado

keydown() // Se produce cuando se presiona una tecla.
keyup() // Se produce cuando se suelta una tecla.


//CODIGO HTML DE REFERENCIA
//<input id = "nombre" type="text">
//<input id = "edad"   type="number">

let input1 = document.getElementById("nombre")
let input2 = document.getElementById("edad")
input1.onkeyup = () => { console.log("keyUp") }
input2.onkeydown = () => { console.log("keyDown") }



// 3. Change

//CODIGO HTML DE REFERENCIA
//<input id = "nombre" type="text">
//<input id = "edad"   type="number">

let input1 = document.getElementById("nombre");
let input2 = document.getElementById("edad");
input1.onchange = () => { console.log("valor1") };
input2.onchange = () => { console.log("valor2") };



// 4. Input


//CODIGO HTML DE REFERENCIA
//<input id = "nombre" type="text">


let input1 = document.getElementById("nombre")
input1.addEventListener(`input`, () => {
    console.log(input1.value)
})



// 5. Submit

//CODIGO HTML DE REFERENCIA

//<form id="formulario">
//<input type="text">
//<input type="number">
//<input type="submit" value="Enviar">
//</form>

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
}