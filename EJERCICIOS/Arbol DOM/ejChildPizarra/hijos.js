window.onload = () => {
    const boton = document.querySelector("button");
    let hijo = document.querySelectorAll("div");

    boton.onclick = () =>{

        for (let i = 0; i < hijo.length; i++) {
            const padre = hijo[i].parentNode;
            padre.removeChild(hijo[i]);
        }
    }

}