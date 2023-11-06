let text = "hello world [JavaScript] we [are] strong!";
// TODO: 
// YOUR CODE HERE
let txt = '';
let isRun = true;
for (let i = 0; i < text.length; i++){
    if (text[i] == '['){
        isRun = false;
    }else if(text[i]== ']'){
        isRun = true;
        i++
    }else if(isRun){
        txt +=text[i]
    }
}
console.log(txt)
// output: hello world we strong!