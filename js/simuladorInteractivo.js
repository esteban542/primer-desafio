// Calculo de descuento por cantidad de jeans a llevar

alert("Bienvenid@ a la mejor tienda de jeans");

let cantidad = parseInt(prompt("Por favor decime cuantos jeans vas a llevar"));

function descuento (cantidad){

    if(cantidad < 10){
        alert("Perdon, no tenes descuento llevando esa cantidad")
    }else if(cantidad >= 10 && cantidad <= 49){
        alert("Tenes un 10% de descuento llevando esa cantidad")
    }else if(cantidad >= 50 && cantidad <= 100) {
        alert("Tenes un 25% de descuento llevando esa cantidad")
    }else{
        alert("Perdon, no tenemos esa cantidad")
    }
}

descuento(cantidad)