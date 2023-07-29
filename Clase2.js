//Forma 1
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


//Forma 2

const tipoDeSuscripcion = "ExpertPlus";

    if (tipoDeSuscripcion == 'Free'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

    } else if (tipoDeSuscripcion == 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } else if (tipoDeSuscripcion == 'Expert'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } else if (tipoDeSuscripcion == 'ExpertPlus'){
        console.log("TÃº y alguien mÃ¡s pueden tomar TODOS los cursos de Platzi durante un aÃ±o");
    }


  

