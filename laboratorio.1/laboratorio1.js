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

//Esta funcion retorna valor
let resultado= calcular(5, 4);

//imprimir el area
console.log(resultado[0])

//hipotenusa

//function calcular_hipotenusa(){

    //Math.pow(a.2) para exponentes

    //const hipotenusa= Math.sqrt(a**2+b**2);
    //return hipotenusa;
//}

//let resultado2= calcular_hipotenusa(10, 20);
//console.log(resultado2)

//suma, resta, multiplicación y división

function calculadora(a,b){
   document.writeln(a+b);
   document.writeln(a-b);
   document.write(a*b);
   document.write(a/b);

   console.log(a+b);
   //console.warn(a-b);
   //console.error(a*b);
   console.info(a/b);
}

calculadora(5,4);    //escribe en la página

//Media de 3 números

function media(){
   
    let campo_x = document.getElementById('x');
    let campo_y = document.getElementById('y');
    let campo_z = document.getElementById('z');
    console.log(campo_x.value + campo_y.value + campo_z.value)

    //casting cambia de manera explicita el tipo de dato de una variable
    let x=parseInt(campo_x.value);
    let y=parseInt(campo_y.value);
    let z=parseInt(campo_z.value);

    //let promedio= (campo_x+campo_y+campo_z)/3
    let promedio= (x+y+z)/3;

    console.log(promedio);

    return promedio;
}