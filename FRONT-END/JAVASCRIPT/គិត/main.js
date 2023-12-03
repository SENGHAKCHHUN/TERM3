let data = document.getElementById("showtext");
let listBtn = document.querySelectorAll('.number');
let opeartor = document.querySelectorAll('.caluator');
console.log(opeartor)
let answer = document.querySelector('.answer');
answer.addEventListener('click', calculator)
for (let btn of listBtn){
    btn.addEventListener('click', showResult)
}
for (let opear of opeartor){
    opear.addEventListener('click', sign)
}
let n1 ='';
let n2 ='';
let symbol = ''
function sign(event) {
    symbol = event.target.textContent;
    data.value += symbol
}
function showResult(event){
    if (symbol === ''){
        n1 += event.target.textContent;
        data.value = n1
    }else{
        n2 += event.target.textContent;
        data.value =  n1 + symbol + n2
    }
}
function calculator(){
    if (symbol === '+'){
        data.value = Number(n1) + Number(n2);
    }else if (symbol === '-'){
        data.value = Number(n1) - Number(n2);
    }else if (symbol === '*'){
        data.value = Number(n1) * Number(n2);
    }else if (symbol === '/'){
        data.value = Number(n1) / Number(n2);
    }
}