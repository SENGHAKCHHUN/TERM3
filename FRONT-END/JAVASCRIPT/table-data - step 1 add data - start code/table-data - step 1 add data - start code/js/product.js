function saveProducts(){
    // save data to localStorage 
    localStorage.setItem('productsData', JSON.stringify(productsData));
}

function loadProducts(){
    // load data from localStorage 
    let loadProducts = JSON.parse(localStorage.getItem('productsData'));
    // if (loadProducts != undefined) {
    //     productsData = loadProducts
    // }
    // else{
    //     saveProducts()
    // }
}
function addProduct() {
    let obj = {}
    obj.name = productName.value;
    obj.price = price.value;
    obj.quantity = quantity.value;
    productsData.push(obj)
    // saveProducts()
    localStorage.setItem('productsData', JSON.stringify(productsData));
    productName.value = '';
    price.value = '';
    quantity.value = ''
    // to check if product id == null set it to 1 otherwise set it to value itself += 1 
    
    // update latest ID to the product list 

    // create new product and add product to product list 

    // push new product to list product 
    
    // clear form 

    // save data 
}

const productName = document.querySelector('#product-name');
const price = document.querySelector('#price');
const quantity = document.querySelector('#qty');
const btn = document.querySelector('button');

// products data 
let productsData = []

    // products : [],
    // latestId : null
;

// load product 
// loadProducts()
// saveProducts()
btn.addEventListener('click', addProduct);