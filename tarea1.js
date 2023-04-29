

// Ejercicio 1:

input = prompt("Ingrese un número:\n");
function piramide (limite) {
    let numero = "";
    for (let i = 1; i <= limite; i++){
        console.log(numero += i);
    }
}
piramide (input);
