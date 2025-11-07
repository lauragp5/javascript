window.onload = () =>{
    const lista = document.querySelector("ul");
    const boton = document.querySelector("button");

    boton.onclick = () => {
        let texto = prompt("Introduce el texto");
        let nuevo = document.createElement("li");

        lista.appendChild(nuevo);
        
        
    }

}