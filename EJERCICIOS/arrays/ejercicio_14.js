let mayor = 0;

let numeros = [2, 4, 10, 5, 6, 10 ];

for(let i = 0 ; i < numeros.length-1 ; i++){
    if((numeros[i] + numeros[i+1]) > mayor){
        mayor = numeros[i] + numeros[i+1];
    }
}

console.log(mayor);