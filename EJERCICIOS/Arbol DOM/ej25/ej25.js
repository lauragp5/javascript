window.onload = () => {
    const aPrincipio = document.getElementById("aPrincipio");
    
    
    const aFinal = document.querySelector("#aFinal");
    const eUltima = document.querySelector("#eUltima");
    const ePrimera = document.querySelector("#ePrimera");
    const lista = document.getElementById("lista");

    aPrincipio.onclick = () =>{
        /*
        let nuevaTarea = prompt("Añade la nueva tarea:");
        let nuevoLi = document.createElement("li");
        */
        // nodo 
        let laura = document.createElement("input");
        laura.setAttribute("type","radio");

        let nuevoLi = document.createElement("li").appendChild(laura);
        nuevoLi.appendChild(document.createTextNode(prompt("Añade la nueva tarea:")));
        
        //nuevoLi.appendChild(nuevaTarea);
        lista.insertBefore(nuevoLi,lista.firstChild);
        
    }

    aFinal.onclick = () => {
        let nuevaTarea = prompt("Añade la nueva tarea:");
        let nuevoLi = document.createElement("li");
        nuevoLi.appendChild(nuevaTarea);
        nuevoLi.insertBefore(lista.lastChild);
    }
        
}