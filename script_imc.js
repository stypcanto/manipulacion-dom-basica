const h1 = document.querySelector('h1');
const valor_peso = document.querySelector('#calculo1');
const valor_altura = document.querySelector('#calculo2');
const btnIMC = document.querySelector('#btnIMC');
const btnReset = document.querySelector('#btnReset');
const form = document.querySelector('#form');
const pResult = document.querySelector('#result')



btnIMC.addEventListener('click', IMCInputValues);
btnReset.addEventListener('click', resetInputValues);

function IMCInputValues(){
    const peso = parseFloat(valor_peso.value);
    const altura = parseFloat(valor_altura.value);
    


    if(!isNaN(peso) && !isNaN(altura))
    {
      const IMCInputs = peso / ((altura/100) ** 2);
      pResult.innerHTML = "El índice corporal es: " + IMCInputs.toFixed(2) + "<br>";

      // Determinar el nivel de peso según el IMC
      if (IMCInputs < 18.5) {
          pResult.innerHTML += "Nivel de peso: Bajo peso";
      } else if (IMCInputs >= 18.5 && IMCInputs <= 24.9) {
          pResult.innerHTML += "Nivel de peso: Normal";
      } else if (IMCInputs >= 25.0 && IMCInputs <= 29.9) {
          pResult.innerHTML += "Nivel de peso: Sobrepeso";
      } else {
          pResult.innerHTML += "Nivel de peso: Obesidad";
      }
    } else {
      pResult.innerHTML = "Por favor ingresa valores válidos en ambos campos";
    }
    
}


function resetInputValues() {
  valor_peso.value = "";
  valor_altura.value = "";
  pResult.innerHTML = "";
}
