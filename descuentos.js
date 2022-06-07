console.group("Descuentos");

function calcularDescuento(precioOriginal, descuento){
    const porcentajePrecioconDescuento = 100 - descuento;
    const precioconDescuento = (precioOriginal *porcentajePrecioconDescuento)/100;
    return precioconDescuento;
}

console.groupEnd;

//Interaccion con el html

function calcularPrecioDescuento(){
    const input1 = document.getElementById("inputPrecio");
    const input2 = document.getElementById("inputDescuento");
    
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    
    const precioDescuento = calcularDescuento(value1, value2); 
    alert("El precio con descuento es: " + precioDescuento);
}