let nombre = 'Juan David';
let apellido = ' Catro Gallego';
let nickname = 'juandc';
let edad = 19;
let mail = 'juanito@alcachofa.xyz';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;


let NombreCompleto = nombre + apellido; 
let dineroReal = dineroAhorrado - deudas;

function NombreCompleto(name, lastname){
    return name + ' '+ lastname
}

function saludo(name, lastname, username){
    const completeName = NombreCompleto(name,lastname);
    console.log("Mi nombre es "+ completeName + ", pero prefiero que me digas "+ username + ".");
}


saludo('Styp','Canto','styp611')