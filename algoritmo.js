/* EJERCICIO */ 
        /*
        COMBINACION DE OPERADORES LOGICOS 
        USO DE && y || y su combinacion 
        Para obtener una beca deben suceder cualquiera de las siguientes situaciones:
        - Si la calificacion se encuentra entre 8 y 10 o tiene referencia directa del docente
            100% de beca
        - Si tiene  mas de 8 y aprobo todos sus trabajos
            75% de beca
        - Si tiene mas de 8 y no aprobo todos los trabajos pero es recomendado por el tutor
        - 50% Beca
        - Si no cumple con las anteriores
            No tiene beca       
        */

            let nota = 7;
            let referenciaDocente = false;
            let aproboTrabajos = true;
            let recomendadoTutor = false;
            let beca="";
            if ( (nota >=8 && nota <= 10) || referenciaDocente ){
                beca = "Tiene beca 100%";
            }else if ( nota < 8 && aproboTrabajos ){
                beca = "Tiene beca 75%";
            }else if ( nota < 8 && !aproboTrabajos && recomendadoTutor ){
                beca = "Tiene beca de 50%";
            } else {
                beca = "No tiene beca";
            }
            console.log(beca);