function perita (num, otro){
    console.log(num + otro)
}

function perita2(num = 3, otro = 2){
    //en este caso si no pasamos ningún valor por parámetro usa los que damos por defecto
    // si solo ponemos un valor sustituirá a num pero se mantiene el valor de otro
}

function perita3(num, otro){
    num = num || 4;
    otro = otro | 3;
}