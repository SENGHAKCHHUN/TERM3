let text="hello world [JavaScript] we [are] strong!";
let newText="";
let isTrue=true;
for (value of text){
    if (isTrue && value!="[" && value!="]") {
        newText+=value;
    }
    else if(value == "["){
        isTrue=false;
    }
    else if(value == "]"){
        isTrue=true;
    }
}
console.log(newText);