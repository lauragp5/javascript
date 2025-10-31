function sumar(){
    let num = document.querySelector("div");
    let valor = parseInt(num.textContent);
    valor++;
    num.textContent = valor;
}

function restar(){
    let num = document.querySelector("div");
    let valor = parseInt(num.textContent);
    valor--;
    num.textContent = valor;
}