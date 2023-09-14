const prompt = require ("prompt-sync")()

    suma=0
    mayor=-1
    var volantines = []
    for (var i=0; i<7; i ++){
        volantines. push(parseInt( prompt("Ingrese numero de volantines ")))
        suma=suma + volantines[i]
        if (volantines[i]>mayor)[ ]; {
            mayor=volantines[i]
            indice= i+1
        }
    }
    console.log(volantines)
    do 

       {
        console.log (   " Menú"   )
        console.log ("1.- calcular el total de volantines en los siete dias");
        console.log ("2.- Calcular el promedio de volantines por día")
        console.log ("3.- indicar cúal fue el dia (indice) con mayores volantines")
        console.log ("4.- indicar la cantidad de menos volantines")
        console.log ("5.- salir del programa")
        
        opcion = prompt("ingrese su opcion ")
    switch (opcion){
        case  "1": 
        console.log ("el total de volantines de los 7 dias fue", suma)
    break
        
    case 2:
        console.log ("el promedio de volantines fue ", suma/7)
        break
        case 3:
            console.log ("el dia con mayor volantines fue ", indice)
        break
    case 4:
        console.log ("la cantidad de volantines pares fue de ",sumapares)
        break
    case 5:
    connsole.log ("adios" )
        break 
    default:
        console.log("el numero que ingresó de volantines no es parte del menú , vuelva a ingresar su opcion")
        break
    }
    } while(opcion!=5)




//Además, al final de estos días realice un informe:
//• Calcular el promedio de volantines por día
//• Cuantos volantines alcanzó a fabricar.
//• Cual fue el día que fabrico menos
//• Restricción de uso de arreglos o listas.
