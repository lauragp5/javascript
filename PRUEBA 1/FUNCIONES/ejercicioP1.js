let edades = [2, 4, 6, 8, 9, 10, 12, 50, 75, 89, 100];

function mayorEdad(num){
    if (num >= 18){
        return true;
    }

    return false;
}

function mayorEdad2(edades){
    /* let i = 0;
    while(i < edades.length){
        if (edades[i] >= 18){
            return true;
        }
        i++;
        return false; 

    } */

        for (const numerito of edades){
            if(mayorEdad(numerito)){
                return true;
            }
        }
        return false;
    
}

function mayorEdad3(edades){
    /*let res = true;
    let i = 0;
    while(res == true || i < edades.length){
        if (edades[i] < 18){
            res = false;
        }
        i++;    
    }
    return res;*/
    for (const numerito of edades){
        if(!mayorEdad(numerito)){
            return false;
        }
    }
    return true;

    //otra forma: "!mayorEdad2(lista);"
}

let salarioBruto = [1000, 1500, 1700, 2000, 2300, 1500, 3000];

for(let elemento of salarios){
    console.log(elemento);
}

/* otra forma de hacerlo

salarioBruto.forEach(function(elemento)){
    console.log(elemento);
}
*/

let IRPF = 15;
let salarioNeto = [];

for(const num of salarioBruto){
    salarioNeto.push((num - (num*IRPF) / 100));
} //con push añado al array un valor

/*otra forma de hacerlo
salarioNeto = sueldoBruto.map(function(valor)){
    salarioNeto.push((valor - (valor*IRPF) / 100));
} */

let fiscalAlto = [];
for(const num of salarioBruto){
    if(num > 1935){
        fiscalAlto.push(num);
    }
}



