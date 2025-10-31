window.onload = () =>{
    let divs = document.querySelectorAll("div");
    divs.forEach(element => {
        element.onmouseover = ()=>{
            document.body.style.setProperty("background-color", element.style.getPropertyValue("background-color"));
        }

        element.onmouseout = () =>{
            document.body.style.setProperty("background-color", "white");
            }
    });


}