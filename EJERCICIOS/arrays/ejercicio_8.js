
function sumaParcial(lista){
    
    let num = 0;
    let lista2 = [];
    
    for(let i = 0; i < lista.length ; i++){
        num += lista[i];
        lista2.push(num);

    }
    
    return lista2;
    
}
let lista = [1, 2, 3, 4, 5, 6];

console.log(sumaParcial(lista));