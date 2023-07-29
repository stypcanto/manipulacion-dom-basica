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
      const IMCInputs = peso / ((altura) ** 2);
      pResult.innerHTML = "El IMC es: " + IMCInputs.toFixed(2) + "<br>";

      // Determinar el nivel de peso según el IMC
      if (IMCInputs < 16.9) {
          pResult.innerHTML += "Nivel de composición corporal: Muy bajo peso";
      } else if (IMCInputs >= 17.0 && IMCInputs <= 18.4) {
          pResult.innerHTML += "Nivel de composición corporal: Bajo peso";
      } else if (IMCInputs >= 18.5 && IMCInputs <= 24.9) {
          pResult.innerHTML += "Nivel de composición corporal: Normal";
      } else if (IMCInputs >= 25.0 && IMCInputs <= 29.9) {
        pResult.innerHTML += "Nivel de composición corporal: Sobrepeso";
      }else if (IMCInputs >= 30.0 && IMCInputs <= 34.9) {
        pResult.innerHTML += "Nivel de composición corporal: Obesidad";
      }else if (IMCInputs >= 35.0 && IMCInputs <= 39.9) {
        pResult.innerHTML += "Nivel de composición corporal: Obesidad marcada";
      }else {
          pResult.innerHTML += "Nivel de composición corporal: Obesidad mórbida";
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
