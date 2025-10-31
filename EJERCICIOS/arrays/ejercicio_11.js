
function compruebaArray(lista1, lista2){
    let lista3 = [];
    for(let i = 0 ; i < lista1.length ; i++){
        if((!lista2.includes(lista1[i])) && (!lista3.includes(lista1[i]))){

                lista3.push(lista1[i]);
        }
    }
    
    for(let i = 0 ; i < lista2.length  ; i++){
        if((!lista1.includes(lista2[i]))&& (!lista3.includes(lista1[i]))){
            lista3.push(lista2[i]);
        }
    }
    
    return lista3;
}

let array1 = [1, 7, 3, 5, 6];
let array2 = [7, 10, 5, 8];

console.log(compruebaArray(array1, array2));