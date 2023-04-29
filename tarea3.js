
// Ejercicio 3

class carrito {
    constructor(montoTotal, productos) {
        this.montoTotal=montoTotal;
        this.productos=[productos];}
   
        agregarcontenido(monto, productos) {
           // try {
             //   for(let i = 0; i < monto.length; i++){
               //     for (j = 0; j < producto.length; j++){
                 //       if (producto[j] != monto[i]){
                            this.productos.push(productos);
                            this.montoTotal = monto + this.montoTotal;
                }    
                }
            //}}
            //catch (err){
            //    console.log("Ya existe ", producto)
            //    console.log(err);
            //}
            
             
       // }
                   
   // }
let carrito1 = new carrito(10, "Leche");
let carrito2 = new carrito(80, "Carne");
let carrito3 = new carrito(450, "Yerba");
let carrito4 = new carrito(11, "Balde");

carrito4.agregarcontenido(10, "Jamón");
//carrito4.agregarcontenido(10, "Jamón");

console.log(carrito4.productos);
console.log(carrito4.montoTotal);






