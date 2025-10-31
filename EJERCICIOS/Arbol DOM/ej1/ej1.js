function mostrar(){
    let web = document.querySelector("a");
    alert(web + "\n" + web.textContent); 
}

function editar(){
    let web = document.querySelector("a");
    web.textContent = "Ir a Medac";
    web.setAttribute("href", "https://www.medac.es");
}