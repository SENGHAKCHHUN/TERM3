let body = document.querySelector('body')
let container = document.createElement('div');
container.classList.add('contianer');
let aside_left = document.createElement('div');
aside_left.classList.add('aside-left');
let input = document.createElement('input');
input.setAttribute('id', 'search')
input.setAttribute('placeholder', 'search here')
input.addEventListener('input', searchInput)
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let tr = document.createElement('tr');
let thFirst = document.createElement('th');
let thLast = document.createElement('th');
let thProvince = document.createElement('th');
let Major = document.createElement('th');
let Age = document.createElement('th')
let Other = document.createElement('th');
thFirst.textContent = 'First';
thLast.textContent = 'Last';
thProvince.textContent = 'Province';
Major.textContent = 'Major';
Age.textContent = 'Age'
Other.textContent = 'Other'
aside_left.appendChild(input)
tr.appendChild(thFirst)
tr.appendChild(thLast)
tr.appendChild(thProvince)
tr.appendChild(Major)
tr.appendChild(Age)
tr.appendChild(Other)
thead.appendChild(tr)
table.appendChild(tbody)
table.appendChild(thead)
aside_left.appendChild(table);
container.appendChild(aside_left)

let aside_right = document.createElement('div');
aside_right.classList.add('aside-right')
container.appendChild(aside_right)
let h1 = document.createElement('h1');
h1.textContent = 'About'
aside_right.appendChild(h1)
let ul = document.createElement('ul');
let liFirst = document.createElement('li')
let liLast = document.createElement('li')
let liProvince = document.createElement('li')
let liMajor = document.createElement('li')
let liAge = document.createElement('li')
function showDetail(event) {
    let data = event.target.closest('tr');
    aside_right.style.display = 'block'
    h1.textContent = 'About ' + data.children[0].textContent;
    liFirst.textContent = 'FirstName : ' + data.children[0].textContent;
    liLast.textContent = 'LastName : ' + data.children[1].textContent;
    liProvince.textContent = 'Province : ' + data.children[2].textContent;
    liMajor.textContent = 'Major : ' + data.children[3].textContent;
    liAge.textContent = 'Age : ' + data.children[4].textContent;
    ul.appendChild(liFirst);
    ul.appendChild(liLast);
    ul.appendChild(liProvince);
    ul.appendChild(liMajor);
    ul.appendChild(liAge);
    aside_right.appendChild(ul)
}
function deleteRow(event) {
    if (confirm('Are you sure to remove user from List? :')) {
        event.target.closest('tr').remove()
    }
}
function createRow(data) {
    let row = document.createElement('tr');
    let tdFirst = document.createElement('td');
    let tdLast = document.createElement('td')
    let tdProvince = document.createElement('td')
    let tdMajor = document.createElement('td')
    let tdAge = document.createElement('td')
    let tdOther = document.createElement('td');
    let detail = document.createElement('button');
    let deleteUser = document.createElement('button');
    detail.setAttribute('id', 'detail');
    deleteUser.classList.add('delete');
    detail.textContent = 'Detail'
    deleteUser.textContent = 'Delete'
    tdOther.appendChild(detail)
    tdOther.appendChild(deleteUser)
    tdFirst.textContent = data['first'];
    tdLast.textContent = data['last'];
    tdProvince.textContent = data['province'];
    tdMajor.textContent = data['major'];
    tdAge.textContent = data['age'];
    row.appendChild(tdFirst)
    row.appendChild(tdLast)
    row.appendChild(tdProvince)
    row.appendChild(tdMajor)
    row.appendChild(tdAge)
    row.appendChild(tdOther)
    tbody.appendChild(row)
    detail.addEventListener('click', showDetail)
    deleteUser.addEventListener('click', deleteRow)
}
body.appendChild(container)
const array = [
    { first: 'riya', last: 'chhun', province: 'KPT', major: 'farmer', age: 27, image : 'image.jpg' },
    { first: 'yiem', last: 'chhun', province: 'KPT', major: 'farmer', age: 24 },
    { first: 'chan', last: 'chhun', province: 'KPT', major: 'student', age: 22 },
    { first: 'senghak', last: 'chhun', province: 'KPT', major: 'student', age: 18 },
    { first: 'maly', last: 'chhun', province: 'KPT', major: 'student', age: 15 },
    { first: 'vorleak', last: 'chhun', province: 'KPT', major: 'student', age: 19 },
]
for (let data of array) {
    createRow(data)
}
let trs = document.querySelectorAll('tbody tr');
function searchInput() {
    let search = input.value;
    for (let tr of trs) {
        if (tr.firstElementChild.textContent.includes(search)) {
            tr.style.display = '';
        }else {
            tr.style.display = 'none'
        }
    }
    
}
