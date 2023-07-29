// h1 {color:red}
// .parrafito { ... }
// #pid { ... }


const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');//ya no es necesario el .
const pid = document.getElementById('pid');//ya no es necesario el #
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})


console.log(input.value);

//Permite modificar el texto de la etiqueta h1
h1.innerHTML = 'Patito <br> Feo';

//una manera bsico de protegernos ante ataques, convierto en texto el codigo HTML
//h1.innerText = 'Patito <br> Feo';

//Para obtener informacion de la clase en h1, se usa Get Atributte
console.log(h1.getAttribute('class'));

//Para modificar la clase verde por la clase rojo, utilizamos Set
//h1.setAttribute('class','rojo');

//Para modificar solamente las clases. En este caso voy agregar la clase rojo
h1.classList.add('rojo');

//Para eliminar una sola clase
h1.classList.remove('verde');

//Toggle dependiendo si tiene la clase o no se agregue o quite en varias ocasiones
//Contains es una condicional tru o false si tiene codigo


//podemos modificar el value de los input a 456

input.value="456"

//ayuda a crear un elemento HTML que deseamos, en este caso creo una mageny le coloco atribut
const img = document.createElement('img');
img.setAttribute('src','https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/que-es-javascript-descubre-sus-5-principales-usos.jpg');

console.log(img);

//agrego la imaghen dentro de un contenedor
pid.innerHTML =''; 
pid.appendChild(img);


