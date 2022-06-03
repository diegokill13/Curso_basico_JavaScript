 //codigo del cuadrado

console.group("Cuadrado");


function perimetroCuadrado(lado) {
    return lado * 4;
}

 function areaCuadrado(lado) {
    return lado + lado;
}

console.groupEnd();

//codigo del triangulo

console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base){;
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Codigo Circurferencia 

console.group("Circuferencia")

function diametroCirculo(radio){
    return radio * 2;
}
const PI = Math.PI;
    console.log("El PI de la circuferencia es; " + PI );

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd()