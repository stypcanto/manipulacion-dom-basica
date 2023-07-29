// Pregunta 1

function imprimirPrimerElementoArray(arr){
    console.log(arr[0])
}

imprimirPrimerElementoArray(['Juanuta','Rigoberto','Natilla'])

// Pregunta 2

function imprimirPrimerElementoArray2(arr2){
    for(let i=0; i < arr2.length ; i++){
        console.log(arr2[i])
    }
}

imprimirPrimerElementoArray2(['Juanuta','Rigoberto','Natilla'])

// Pregunta 3 OBJETO

const obj = {
    nombre: 'Fulanito',
    edad:3,
    comidasFavoritas:['Pollo frito', 'Vegetales'],
};

Object.values(obj)

// Desarrollo de Pregunta 3 OBJETO

function imprimirPrimerElementoObjeto(obj){
    const arr = Object.values(obj);
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

imprimirPrimerElementoObjeto(obj)