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

//Cuadrado
function calcularperimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es " +perimetro);
}

function calcularareaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area del cuadrado es "+area);
}

//Triangulo

function calcularperimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const base = document.getElementById("inputTriangulo3");
    
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(base.value);
    
    const perimetro = perimetroTriangulo(value1,value2, value3);

    alert("El perimetro del triangulo es " +perimetro);
}

function calcularareaTriangulo(){
    
    const base = document.getElementById("inputTriangulo3");
    const altura = document.getElementById("inputTriangulo4");
    
    const value3 = Number(base.value);
    const value4 = Number(altura.value);

    const area = areaTriangulo(value3,value4);

    alert("El area del triangulo es "+area);
}

//Circunferencia

function calcularperimetroCircunferencia(){
    const input1 = document.getElementById("inputCircunferencia");
    const value = input1.value;
    
    const perimetro = perimetroCircunferencia(value);

    alert("El perimetro de la circunferencia es " +perimetro);
}

function calcularareaCircunferencia(){
    const input1 = document.getElementById("inputCircunferencia");
    const value = input1.value;
    
    const area = areaCircunferencia(value);

    alert("El area de la circunferencia es "+area);
}