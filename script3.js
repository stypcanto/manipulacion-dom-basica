const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnSumar = document.querySelector('#btnSumar');
const btnRestar = document.querySelector('#btnRestar');
const btnReset = document.querySelector('#btnReset');
const form = document.querySelector('#form');
const pResult = document.querySelector('#result')

//OPCION 1 usando boton onClick

//btn.addEventListener('click',btnOnClick);

//function btnOnClick(){
  //  const sumaInputs = input1.value + input2.value;
  //  pResult.innerHTML = "Resultado: " + sumaInputs;
//}

//OPCION 2 usando form

//form.addEventListener('submit',sumarInputValues);

//function sumarInputValues(event){
    //console.log({event});
  //  event.preventDefault();
  //  const sumaInputs = input1.value + input2.value;
   // pResult.innerHTML = "Resultado: " + sumaInputs;
//}


//OPCION 3 usando boton



btnSumar.addEventListener('click', sumarInputValues);
btnRestar.addEventListener('click', restarInputValues);
btnReset.addEventListener('click', resetInputValues);

function sumarInputValues(){
    const valor1 = parseInt(input1.value);
    const valor2 = parseInt(input2.value);
    
/* 
En la expresión, isNaN(valor1) devuelve true si valor1 no es un número y false si es un número válido. Al agregar el operador lógico de negación ! delante de isNaN(valor1), estamos invirtiendo el resultado, es decir, si valor1 es un número válido, la expresión !isNaN(valor1) será true, y si no es un número válido (es NaN), la expresión será false.
*/

    if(!isNaN(valor1) && !isNaN(valor2))
    {
      const sumaInputs = valor1+ valor2;
      pResult.innerHTML = "Resultado: " + sumaInputs;
    }else{
      pResult.innerHTML = "Por favor ingresa números válidos en ambos campos"
    }
    
}

function restarInputValues() {
  const valor1 = parseInt(input1.value);
  const valor2 = parseInt(input2.value);

  if (!isNaN(valor1) && !isNaN(valor2)) {
      const restaInputs = valor1 - valor2;
      pResult.innerHTML = "Resultado: " + restaInputs;
  } else {
      pResult.innerHTML = "Por favor ingresa números válidos en ambos campos";
  }
}

function resetInputValues() {
  input1.value = "";
  input2.value = "";
  pResult.innerHTML = "";
}
