let tablero = [];

for (let i = 0; i < 4; i++) {
    tablero.push([]);
    for (let j = 0; j < 5; j++) {
           tablero[i].push("_");
    }
    
}

console.log(tablero);



/*

let coord1 = parseInt(Math.random() *(3+1));
let coord2 = parseInt(Math.random() *(4+1));
let contador = 0;

//creo las minas (=)
do {
    if(tablero[coord1,coord2]!= " "){
        tablero[coord1,coord2] = "=";
        contador++;
    } 
} while (contador != 3);

let esta = false;
//creo el tesoro ($)
do {
    if(tablero[coord1,coord2]!= " ") {
        tablero[coord1,coord2] = "$";
        esta = true;
    }
} while (esta);

    

*/
