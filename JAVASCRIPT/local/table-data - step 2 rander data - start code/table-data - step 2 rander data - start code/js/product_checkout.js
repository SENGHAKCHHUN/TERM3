const table = document.querySelector('table');
let trs;
function saveProducts() {
    localStorage.setItem('productsData', JSON.stringify(productsData));
}
function loadProducts() {
    let loadProducts = JSON.parse(localStorage.getItem('productsData'));
    if (loadProducts != undefined) {
        productsData = loadProducts
    }
    else {
        saveProducts()
    }
}
function renderProducts() {
    // call load products 
    loadProducts()
    // remover old tbody 
    tbody.remove();
    // create new table body element as "tBody" 
    let table_body = document.createElement('tbody');
    // create all table rows depending data from product list 
    for (let obj of productsData.products) {
        let tRow = document.createElement('tr');
        let tdName = document.createElement('td')
        tdName.textContent = obj.name;
        let tdQty = document.createElement('td')
        let qtyInput = document.createElement('input');
        qtyInput.setAttribute('type', 'number');
        qtyInput.setAttribute('value', obj.quantity);
        tdQty.appendChild(qtyInput);
        let tdUnitPrice = document.createElement('td');
        tdUnitPrice.textContent = obj.price + '$';
        let tdTotalPrice = document.createElement('td');
        tdTotalPrice.textContent = Number(obj.price) * Number(qtyInput.value.replace('$', ''));
        tRow.appendChild(tdName)
        tRow.appendChild(tdQty)
        tRow.appendChild(tdUnitPrice)
        tRow.appendChild(tdTotalPrice)
        tbody.appendChild(tRow)
        table.appendChild(tbody)
    }
    trs = document.querySelectorAll('tbody tr');
    console.log(trs)
    for (let tr of trs){
        tr.addEventListener('input', getResult)
    }
}
function getResult(e){
    let sum = 0;
    let t = e.target.closest('tr');
    let valueInput = e.target.value;
    if (valueInput > 0){
        let priceProduct = e.target.closest('tr').children[2].textContent.replace('$','');
        let totalProduct = e.target.closest('tr').children[3];
        totalProduct.textContent = valueInput * parseInt(priceProduct)
        for (let tr of t.parentElement.children){
            sum += Number(tr.children[3].textContent)
        }
        total.textContent = sum + '$'
    }
}
// products data 
let productsData = {
    products: [],
    latestId: null
};
const tbody = document.querySelector('tbody')
let total = document.querySelector('.total');
// once you started we need to call load data and renderProductsData 
loadProducts()
renderProducts();