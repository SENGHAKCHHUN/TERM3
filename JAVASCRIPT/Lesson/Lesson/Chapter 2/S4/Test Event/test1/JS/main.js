const COLORLENTH=6;

let randomColor=()=>{
    let code_color="#";
    for(i=0; i< COLORLENTH; i++){
        let index_color=Math.floor(Math.random()*16);
        code_color+=array_color[index_color];
    }
    return code_color;
}

let array_color=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

// Event
let btn_color=document.getElementById('btn-color');
btn_color.addEventListener("click", function(){
    document.body.style.background=randomColor();
    document.getElementById('code-color').textContent=randomColor()
});

