let products = [
    {product : 'Book', stock : 100, price : '0,5$'},
    {product : 'pen', stock : 2000, price : '0,13$'},
    {product : 'Computer', stock : 1000, price : '400$'},
    {product : 'IPhone 15pro', stock : 100, price : '2000$'},
    {product : 'Mouse pay', stock : 100, price : '1$'},
    {product : 'Keyborad', stock : 100, price : '12$'},
    {product : 'Keyborad Light', stock : 100, price : '20$'},
]
let number = 0;
let calculator = 0;
let col = document.querySelector('.col')
function saveProduct() {
    localStorage.setItem('products', JSON.stringify(products));
}
function loadData() {
    return JSON.parse(localStorage.getItem('products'));
}
// saveProduct()
loadData()

function createCard(element) {
    let card = document.createElement('div');
    card.className = 'card p-3 mt-3 product border-danger border-2'
    let h3 = document.createElement('h3');
    h3.textContent = element.product;
    let pOne = document.createElement('p');
    pOne.textContent = 'Number in Stock: ' + element.stock;
    let pTwo = document.createElement('p');
    pTwo.textContent = 'Price : ' + element.price;
    card.appendChild(h3)
    card.appendChild(pOne)
    card.appendChild(pTwo)
    col.appendChild(card)
}
function displayCard() {
    products = loadData()
    for (let product of products) {
        createCard(product)
    }
}
displayCard()
function booking(event) {
    let data = event.target.closest('.card');
    let card_result = document.createElement('div');
    card_result.className = 'card p-3 mt-3 flex-row justify-content-between border-danger border-2'
    let h5 = document.createElement('h5');
    h5.style.width = '150px'
    h5.textContent = data.firstElementChild.textContent;
    let price = document.createElement('p');
    price.textContent = data.children[2].textContent;
    price.className = 'price'
    let i_decre = document.createElement('i');
    i_decre.className = 'bi bi-file-minus-fill fs-4 lh-1 minus-icon';
    i_decre.addEventListener('click', decreProduct)
    let result = document.createElement('p');
    result.textContent = '0'
    result.className = 'number'
    let i_incre = document.createElement('i');
    i_incre.className = "bi bi-file-plus-fill fs-4 lh-1 plus-icon";
    i_incre.addEventListener('click', increProduct)
    let total = document.createElement('p');
    total.textContent = 'total : 0.00$';
    total.className = 'total'
    let image = document.createElement('img');
    image.src = 'delete.png';
    image.style.width = '25px'
    image.style.height = '25px'
    image.addEventListener('click', function () {
        if (confirm('Are you sure to remove order?')) {
            image.parentElement.remove()
            data.addEventListener('click', booking)
            number = 0;
            res = 0
        }
    })
    card_result.appendChild(h5)
    card_result.appendChild(price)
    card_result.appendChild(i_decre)
    card_result.appendChild(result)
    card_result.appendChild(i_incre)
    card_result.appendChild(total)
    card_result.appendChild(image)
    right_info.appendChild(card_result)
    data.removeEventListener('click', booking)
}

let listCard = document.querySelectorAll('.product');
let right_info = document.querySelector('.showInfo');
for (let card of listCard) {
    card.addEventListener('click', booking)
}

function increProduct() {
    let imcrement = document.querySelector('.number');
    number += 1
    imcrement.textContent = number;
    totalMoney()
}
function decreProduct() {
    let decrement = document.querySelector('.number');
    if (number > 0) {
        number -= 1
        decrement.textContent = number;
    }
    totalMoney()

}
function totalMoney() {
    let listIncre = document.querySelectorAll('.plus-icon');
    console.log(listIncre)
    listminus = document.querySelector('.minus-icon');
    console.log(listminus)
    let total = document.querySelector('.total');
    let price = document.querySelector('.price').textContent;
    let isRun = false;
    let res = ''
    for (let i = 0; i < price.length; i++) {
        if (price[i] === ':') {
            isRun = true;
        } else if (isRun && price[i] !== '$') {
            res += price[i]
        }
    }
    console.log(res)
    calculator = number * Number(res)
    total.textContent = 'Total : ' + calculator + '$'
}
