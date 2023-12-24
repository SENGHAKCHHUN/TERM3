const INCREASE_COLOR="green";
const DECREASE_COLOR="red";
const RESET_COLOR="black";

let btn_group=document.querySelectorAll(".btn");
let count=0;

for(let btn of btn_group){
    btn.addEventListener("click",(event)=>{
        let btnClass=event.target;
        if(btnClass.classList.contains("increase")){
            count++;
            if(count>0){
                color=INCREASE_COLOR;
            }
        }
        else if(btnClass.classList.contains("decrease")){
            count--;
            if(count<0){
                color=DECREASE_COLOR;
            }
        }
        else{
            count=0;
            color=RESET_COLOR;
        }
        document.getElementById("number").textContent=count;
        document.getElementById("number").style.color=color;
    })
}


let arr=[12,22,32,42,52];
function checkNb(number){
    return number<10;
}
console.log(arr.every(checkNb));




// let btn_decrease=btn_group[0]

