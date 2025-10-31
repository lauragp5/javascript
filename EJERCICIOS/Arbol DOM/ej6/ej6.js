
    let color = document.getElementsByTagName("button");
    for(let i = 0 ; i < color.length ; i++){
            color[i].onclick = () => {
                document.body.setAttribute("bgcolor" ,color[i].value);
            }
    }