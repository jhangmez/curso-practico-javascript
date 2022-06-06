//Hola mundo
console.group("Hola mundo");
console.log("HELLO, WOLRD");
console.groupEnd();

//Codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5 ;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado +"cm");

const perimetroCuadrado = ladoCuadrado *4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado *ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado +"cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4 ;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: "+ ladoTriangulo1 +"cm,"+ ladoTriangulo2 +"cm");
console.log("La base del triangulo mide: "+ baseTriangulo +"cm");
console.log("La altura del triangulo mide: "+ alturaTriangulo +"cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo+"cm");

const areaTriangulo = baseTriangulo *alturaTriangulo /2;
console.log("El area del triangulo es: " + areaTriangulo +"cm^2");

console.groupEnd();

//Codigo de una Circunferencia

console.group("Circunferencia");

const radioCircunferencia = 4;
console.log("El radio de la Circunferencia es: " +radioCircunferencia);

const diametroCircunferencia = radioCircunferencia *2;
console.log("El diametro de la Circunferencia es: " +diametroCircunferencia);

const PI = Math.PI;
console.log("El valor de pi es: "+ PI);

const perimetroCircunferencia = diametroCircunferencia*PI;
console.log("El perimetro de la Circunferencia es: " +perimetroCircunferencia);

const areaCircunferencia = PI* radioCircunferencia*radioCircunferencia;
console.log("El area de la Circunferencia es: " +areaCircunferencia);

console.groupEnd();

//Rama solo para constantes