## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayorÃ­a) NO SON ABSOLUTAS. Es completamente vÃ¡lido (en la mayorÃ­a de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la secciÃ³n de comentarios del curso. :D


## Variables y operaciones

### 1¸ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para quÃ© sirve?

Cajtas (espacios en memoria) donde podemos guardar informacón (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

var, let, const

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar parámetros y concatenar strings?

- ¿Cuál operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar nÃºmeros cuando lo usamos con nÃºmeros. Pero cuando los strings, lo que hace es unir (concatenar, asÃ­ se dice) ambos strings.

### 2¸ Determina el nombre y tipo de dato para almacenar en variables la siguiente informaciÃ³n:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: strig (@fulanito)
- Edad: number
- Correo electrÃ³nico: string (lala@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3ï¸ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Juan David';
let apellido = 'Catro Gallego';
let username = 'juandc';
let edad = 19;
let mail = 'juanito@alcachofa.xyz';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```

### 4¸Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```



## Funciones

### 1ï¸Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
Las funciones nos permiten encapsular (guardar) bloques de códigos para reutilizarlos ye jecutarlos en el futuro.

- ¿Cuándo me sirve usar una función en mi código?
Nos sirve cuando tenemos variables o bloques de código muy parecdos (con cambios que podrían ser parámetros y argumentos) que podemos encapsular para eutilizar más de una vez en el futuro.

También nos sirve para ordenar y mejorar la legibilidad de nuestro codigo.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Las funciones reciben parámetros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.

### 2ï¸Convierte el siguiente cóigo en una función, pero, cambiando cuando sea necesario las variables constantes por parÃ¡metros y argumentos en una funciÃ³n:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```


## Condicionales

### 1.Responde las siguientes preguntas en la secciÃ³n de comentarios:

- ¿Qué es un condicional?
 Son la forma en que ejecutamos un bloque de código u otrodependiendo de alguna condición y validación

- ¿Qué tipos de condicionales existen en JavaScript y cuÃ¡les son sus diferencias?

if (e;lse y else if), switch 

El condicional if(con el se y else if) nos permite hacer validaciones completamente distitnas (si así queremos) en cada validacion o condcional/ En cambio, en el switch todos los cases se comparan con la misma variable o condicion que definimos en el switch.

- ¿Puedo combinar funciones y condicionales?

Sí. Las funciones pueden encapsular cualquier bloque de código, incluyendo condiciones

### 2.Replica el comportamiento del siguiente cÃ³digo que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un aÃ±o");
       break;
   case "ExpertPlus":
       console.log("TÃº y alguien mÃ¡s pueden tomar TODOS los cursos de Platzi durante un aÃ±o");
       break;
}
```

### Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

function conseguirTipoSuscripcion(suscripcion){

    if (suscripcion == 'Free'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    } 
    
    if (suscripcion == 'ExpertPlus'){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un aÃ±o");
        return;
    }

    console.warn('Ese tipo de suscripcion no existe')
}

conseguirTipoSuscripcion('Free')

> ¡ Bonus: si ya eres una experta o experto en el lenguaje, te desafÃ­o a comentar cómo replicar este comportamiento con arrays o objetos y un solo condicional. 


const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic:'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert:'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertplus:'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};


function conseguirTipoSuscripcion(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn('Ese tipo de suscripción no existe')
}

conseguirTipoSuscripcion('free')


## Ciclos

### Responde las siguientes preguntas en la secciÃ³n de comentarios:

- ¿Qué es un ciclo?
   La forma de ejecutar un bloque de código hasta que se cumpla cierta condición.

- ¿Qué tipos de ciclos existen en JavaScript?
    While, do while y for.

- ¿Qué es un ciclo infinito y por qué es un problema?

  Es cuando la validación de nuestros condiciones nunca se cumple y termina toteando (dañando) la aplicacion (e.j. cuando el navegador ya no puede más tanta ejecución de ese blque de código).

- ¿Puedo mezclar ciclos y condicionales?
Sí, aunque los ciclos son una especie de condciones, nada nos impide agregar más condiciones dentro del ciclo.

###  Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

### 3ï¸ Escribe un código en JavaScript que le pregunte a los usuarios cuÃ¡nto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> ðŸ’¡ Pista: puedes usar la función prompt de JavaScript.

while(respuesta != '4'){
  let pregunta = prompt('Cuanto es 2 + 2')
  respuesta=pregunta;
}

## Listas

### 1ï¸Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
   Es una lista de elementos

    ````
    const array = [1, 'jaja', true, false, {nombre: 'lala', edad:3}];
    ```

- ¿Qué es un objeto?
  Es una lista de elementos pero cada elemento tiene un nombre clave.

    ````
    const obj= {
        nombre:'Fulanito',
        edad: 3,
    };

    ```

- ¿Cuándo es mejor usar objetos o arrays?

Arrays cuando haremos en un elemento es lo mismo en todo lo demás (la regla se puede incumplir).

Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Sí. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades/

### 2ï¸ Crea una función que pueda recibir cualquier array como parametro e imprima su primer elemento.

function imprimirPrimerElementoArray(arr){
    console.log(arr[0])
}
imprimirPrimerElementoArray(['Juanuta','Rigoberto','Natilla'])


### 3ï¸ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function imprimirPrimerElementoArray2(arr2){
    for(let i=0; i < arr2.length ; i++){
        console.log(arr2[i])
    }
}

imprimirPrimerElementoArray2(['Juanuta','Rigoberto','Natilla'])

### 4ï¸âƒ£ Crea una funciÃ³n que pueda recibir cualquier objeto como parÃ¡metro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

function imprimirPrimerElementoObjeto(obj){
    const arr = Object.values(obj);
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

imprimirPrimerElementoObjeto(obj)