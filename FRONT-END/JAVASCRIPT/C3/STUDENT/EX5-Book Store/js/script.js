//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {

  // 1- Check the event if raised on the button delete 
  //  2  if yes, get the parent and remove it from the  bookList
}

function addBook(event) {
  event.preventDefault();

  // 1- Get the book name from the input field

  // 2- Create a new spam bookName for the book name, class name = name


  // 3- Create a new spam deleteBtn for the button delete, class name = delete

  // 4- Create a new li

  // 5- Add bookName and deleteBtn to li and li to the  bookList UL

}

function searchBook(event) {
  // 1- Get the search text

  // 2- Loop on all LI

  // Update the style of the LI (visible or hidden)

}




//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("submit", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);



function myFunction(event){
  add.event.preventDefault();
  let ul = document.querySelector('ul')
  let bookName = document.createElement('li');
  let span1 = document.createElement('span')
  let span2 = document.createElement('span')
  span1.textContent='Delete';
  span1.setAttribute('class',"name")
  span1.textContent = 'span1'
  bookName.appendChild(span1)
  span2.classList = "delete"
  bookName.appendChild(span2)
  ul.appendChild(bookName)
}
let data = document.getElementById("add-book-textfield").value;
let add = document.getElementById("add-book");

add.addEventListener('click',myFunction)


let deleteList = document.querySelectorAll('.delete')
for (let element of deleteList) {
  element.addEventListener('click', function () {
    if (window.confirm("Do you want to remove")) {
      element.closest('li').remove();
      console.log(element)
    }
  })
}