    //codigo del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
    console.log("Los lados del cuadrado miden: " + ladoCuadrado)
const perimetroCuadrado = ladoCuadrado * 4;
    console.log("El perimetrodel cuadrado es; " + perimetroCuadrado);
const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("El area del cuadrado es; " + areaCuadrado + " cm^2");

console.groupEnd();

    //codigo del triangulo

console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;  
const baseTriangulo = 4;

    
console.log(
    "Los lados del triangulos son de; " 
    +
    ladoTriangulo1 
    +
    "cm, "
    + 
    ladoTriangulo2 
    +
    "cm, "
    +
    baseTriangulo
    +
    "cm."
    );

const alturaTriangulo = 5.5;

console.log("La altura del triangulo es; " 
    +
    alturaTriangulo
    +
    "cm, " 
    );
        

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + alturaTriangulo ;

    console.log("El perimetro del triangulo es; "
     + 
     perimetroTriangulo 
     + 
     "cm "
     );
const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;

    console.log("El area del Triangulo es; " + areaTriangulo + " cm^2");

console.groupEnd();

//Codigo Circurferencia 

console.group("Circuferencia")

const radioCirculo = 4;
    console.log("El radio del circulo es; " + radioCirculo + " cm");

const diametroCirculo = radioCirculo * 2;
    console.log("El diametro del cirulo es; " + diametroCirculo + " cm");
const PI = Math.PI;
    console.log("El PI de la circuferencia es; " + PI );
const perimetroCirculo = diametroCirculo * PI;
    console.log("El perimetro del circulo es; " + perimetroCirculo + " cm");
const areaCirculo = (radioCirculo * radioCirculo) * PI;
    console.log("El area del circulo es; " + areaCirculo + " cm^2");

console.groupEnd()