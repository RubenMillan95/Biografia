function CalculodeCalificaciónFinal(){
   
    let parcial_1 = parseInt(document.getElementById('parcial_1'));
    let parcial_2 = parseInt(document.getElementById('parcial_2'));
    let parcial_3 = parseInt(document.getElementById('parcial_3'));
    
    let promedio= (parcial_1+parcial_2+parcial_3)/3;

    //console.log(campo_x.value + campo_y.value + campo_z.value)


    
    console.log(promedio);

    return promedio;
}