// function getTotal() { 
//     let tbody = document.querySelectorAll('tbody tr');
//     let sum = 0;
//     for (let t of tbody) {
//         sum += Number(t.children[3].textContent.replace('$', ''))
//     }
//     total.textContent = sum + '$'
// }
// function getQuantities(e) {
//     let quantity = e.target.value;
//     let price = e.target.closest('tr').children[2].textContent.replace('$', '');
//     let priceTotal = e.target.closest('tr').children[3];
//     priceTotal.innerHTML = Number(quantity) * parseInt(price) + '$';
//     getTotal()
// }
// let quantities = document.querySelectorAll('input');
// let total = document.querySelector('.total');
// for (let qty of quantities) {
//     qty.addEventListener('input', getQuantities);
// }
function getTotal(e) {
    let tbody = document.querySelectorAll('tbody tr');
    console.log(tbody)
    let totalPrice = document.querySelector('.total');
}
function getResult(e) {
    let input = e.target.value;
    let price = e.target.closest('tr').children[2].textContent.replace('$', '');
    let total = e.target.closest('tr').children[3];
    total.textContent = input * price + '$';
    getTotal()
}

let inputList = document.querySelectorAll('input');
for (let input of inputList) {
    input.addEventListener('input', getResult)
}