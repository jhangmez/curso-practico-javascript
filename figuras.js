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

    function perimetroCircunferencia(radio){
        const PI = Math.PI;
        return PI*radio*2
    }

    function areaCircunferencia(radio){
        const PI = Math.PI;
        return PI*radio*radio
    }


console.groupEnd();