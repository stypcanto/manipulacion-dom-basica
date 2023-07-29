
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnSuma = document.querySelector('#btnCalcular1');
const btnResta = document.querySelector('#btnCalcular2');
const btnMultiplicacion = document.querySelector('#btnCalcular3');
const btnDivision = document.querySelector('#btnCalcular4');
const pResult = document.querySelector('#result');

//onclick es para escuchar el dato que se coloca en un placeholder

// const sumaInputs = input1.value + input2.value; //concatenacion lo guarda en texto

function funcionSuma(){
    const sumaInputs = Number(input1.value) + Number(input2.value); //se convierte de texto a numero el value
    pResult.innerHTML = "Resultado:" + sumaInputs;
}

function funcionResta(){
    const restaInputs = Number(input1.value) - Number(input2.value); //se convierte de texto a numero el value
    pResult.innerHTML = "Resultado:" + restaInputs;
}

function funcionMultiplicacion(){
    const multiplicacionInputs = Number(input1.value) * Number(input2.value); //se convierte de texto a numero el value
    pResult.innerHTML = "Resultado:" + multiplicacionInputs;
}

function funcionnDivision(){
    const divisionInputs = Number(input1.value) / Number(input2.value); //se convierte de texto a numero el value
    pResult.innerHTML = "Resultado:" + divisionInputs;
}





