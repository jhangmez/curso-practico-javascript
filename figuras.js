//Hola mundo
console.group("Hola mundo");
console.log("HELLO, WOLRD");
console.groupEnd();

//Codigo del cuadrado
console.group("Cuadrado");

    function perimetroCuadrado(lado){
        return lado *4
    }

    function areaCuadrado(lado){
        return lado*lado
    }

console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");

    function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base
    }

    function areaTriangulo(base, altura){
        return base * altura /2
    }

console.groupEnd();

//Codigo de una Circunferencia
console.group("Circunferencia");

    const PI = Math.PI;

    function diametroCircunferencia(radio){
        return radio *2
    }

    function perimetroCircunferencia(radio){
        
        const diametro = diametroCircunferencia(radio);
        return PI*diametro
    }

    function areaCircunferencia(radio){
        
        return PI*radio*radio
    }

console.groupEnd();

//Aqui comenzamos la interaccion con el html

function calcularperimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularareaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}