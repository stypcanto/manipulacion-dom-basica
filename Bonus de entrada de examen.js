
//### 2.Replica el comportamiento del siguiente cÃ³digo que usa la sentencia switch utilizando if, else y else if:

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

// BONUS - Previo al desarrollo

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic:'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert:'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertplus:'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

//opcion 1
tiposDeSuscripciones.free
//opcion 2, ambos son validos
tiposDeSuscripciones['free']
//opcion 3
const ejemploSuscripcion = 'free'
tiposDeSuscripciones[ejemploSuscripcion]


// BONUS - Desarrollo

function conseguirTipoSuscripcion(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return; //Para que se rompa la condcional y no salte al otro
    }
    console.warn('Ese tipo de suscripción no existe')
}

conseguirTipoSuscripcion('free')