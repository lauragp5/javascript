let colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];

let res = ["casa", "blue", "green", "orden", "brown", "bombilla", "bici", "pink"];//prompt("Introduce una lista");

let  tmp = [];
let resto = [];

for(let i = 0 ; i < res.length ; i++){
    if(colores.includes(res[i])){
        tmp.unshift(res[i]);
    }
    else{
        tmp.push(res[i]);
    }
}


 res = tmp;
console.log(res);