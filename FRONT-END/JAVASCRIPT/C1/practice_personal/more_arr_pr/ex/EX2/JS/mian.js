let input = prompt("enter a string");
let arr = [];
let word = '';
let isSpace = false;
for (let i = 0; i < input.length; i++){
    if (i = 0){
        input[0] = input[0].toUpperCase()
    }
    if (input[i] == ' '){
        arr.push(word)
        word = ''
        isSpace = true
    }else if(input[i] != ' ' && ! isSpace){
        word += input[i]
    }else if(isSpace){
        word += input[i].toUpperCase()
        isSpace = false
    }
}
arr.push(word)
console.log(arr)