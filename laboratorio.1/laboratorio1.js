//laboratorio 1 Algoritmos

//1. Solicita e imprime el nombre en pantalla

let nombre;
nombre=prompt()

//document.write(nombre)
console.log("hola " + nombre);

//2. Cálculo geométrico

function calcular(base, altura){ //crea variable
  let area;
  let perimetro;

  area=base * altura;
  perimetro=2*(base+altura);
   //valor que retorna la función a quien la llama
   return[area, perimetro];

}

//Esta funcion retorna valores
let resultado=calcular(5, 4);

//imprimir el area
console.log(resultado[0])

//hipotenusa

function calcular_hipotenusa(){

    //Math.pow(a.2) para exponentes

    const hipotenusa= Math.sqrt(a**2+b**2);
    return hipotenusa;
}

let resultado= calcular_hipotenusa(10, 20);
