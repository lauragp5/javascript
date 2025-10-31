function derecha(){
    const foto = document.querySelector("div");
    const posicion = parseInt(getComputedStyle(foto).left) + 100;
    foto.style.left = posicion + "px";
    
}

function izquierda(){
    const foto = document.querySelector("div");
    const posicion = parseInt(getComputedStyle(foto).left) - 100;
    foto.style.left = posicion + "px";
    
}

/* Si quito el onclick en el html con esto también funciona, es eventos

window.onload = () => {
    const foto = document.querySelector("div");
    const izqu = document.getElementById("izq")
    const dere = document.getElementById("der");

    dere.onclick = (() => {
        const posicion = parseInt(getComputedStyle(foto).left) + 100;
        console.log(posicion);
        foto.style.left = posicion + "px";
    });
    
}*/