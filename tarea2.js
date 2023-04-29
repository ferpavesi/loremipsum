// Ejercicio 2

function comparacion(newArray1, newArray2){

newArray1 = ["Ford", "Chevrolet", "Suzuki", "Toyota", "BMW", 2, 999, 123];
newArray2 = ["Chevrolet", "BMW", "Peugeot", "Ford", "Dodge", 20, 99, 123];
let arrayresultado = [];

    for(let i = 0; i < newArray1.length; i++){
        for (j = 0; j < newArray2.length; j++){
            if (newArray2[j] === newArray1[i]){
                arrayresultado.push(newArray2[j]);
            }
        }
    }
    return console.log(arrayresultado);
}
comparacion();
