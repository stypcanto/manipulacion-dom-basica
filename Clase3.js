
//antes
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

//despues
let i=0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}



//antes
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//despues

let i=10;
while (i>=2){
    console.log("El valor de i es: " + i);
    i--;
}

//Desafio
while(respuesta != '4'){
    let pregunta = prompt('Cuanto es 2 + 2')
    respuesta=pregunta;
  }

//Desafio mejorado

let respuesta = '';
while(respuesta != '4'){
  let pregunta = prompt('Cuanto es 2 + 2')
  respuesta=pregunta;
  if(respuesta === '4'){
    console.log('Sí, su respuesta es correcta');
  }else{
    console.log('Siga intentado');
  }
}