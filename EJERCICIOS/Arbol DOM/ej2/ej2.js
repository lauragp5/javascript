/*
 • El primero muestra los valores de anchura y altura de la tabla, pide unos valores nuevos para cada propiedad y los aplica a la tabla. ¿se aplican correctamente los valores? ¿Falla alguno?
*/

function mostrarTam(){
    let tabla = document.querySelector("table");

    alert(tabla.getAttribute("height") + "\n" + tabla.getAttribute("width"));

    let tamH = prompt("introduce una altura");
    let tamW = prompt("introduce el nuevo ancho");

    tabla.setAttribute("height", tamH);
    tabla.setAttribute("width", tamW);

    alert(tabla.getAttribute("height") + "\n" + tabla.getAttribute("width"));


}

/* El segundo muestra el valor actual del borde de la tabla y solicita un valor nuevo para aplicarlo. ¿Funciona correctamente el nuevo valor?*/ 
function mostrarBor(){
    let tabla = document.querySelector("table");

    alert(tabla.getAttribute("border"));

    let borde = prompt("introduce el nuevo borde");

    tabla.setAttribute("border", borde);
}

/*El tercer botón va cambiar la alineación de la tabla cada vez que se pulse. Es decir, si la tabla está alineada al centro, al pulsar el botón, la tabla quedará alineada a la derecha. Si se pulsa el botón otra vez, se alineará a la izquierda y si vuelvo a pulsarlo, la tabla se pondrá en el centro*/ 
function alinear(){
    let tabla = document.querySelector("table");

    let ali = tabla.getAttribute("align");
    
    if(ali == "center"){
        tabla.setAttribute("align", "right");
    }
    else if(ali == "right"){
        tabla.setAttribute("align", "left");
    }
    else{
        tabla.setAttribute("align", "center")
    }
}