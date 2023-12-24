
document.body.style.backgroundColor="teal";
let title=document.createElement("h1");
title.textContent ="I am Visal!";
document.body.insertBefore(title, null)



let wrapper = document.getElementById("wrapper");
let h1=document.createElement("h1");
h1.textContent ="Hello World!";
h1.style.textAlign="center";
h1.style.color="orange";
document.getElementById("wrapper").insertBefore(h1, wrapper.children[0]);


//way 1
title.addEventListener("mouseover", function(){
    title.style.color="yellow";
})   
//way 2
title.onmouseover=function(){
    title.style.color="yellow";
}


title.onmouseout=function(){
    title.style.color="black";
}




