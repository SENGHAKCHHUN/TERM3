//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
	
  // 1- Check the event if raised on the button delete 
  if(event.target.className==="delete"){
    //  2  if yes, get the parent and remove it from the  bookList
    event.target.parentNode.remove();
  }
}

function addBook(event) {
  event.preventDefault();

  // 1- Get the book name from the input field
  let newName=document.getElementById("add-book-textfield").value;
  
  // 2- Create a new spam bookName for the book name, class name = name
  let newBook=document.createElement("span");
  newBook.className="name";
  newBook.textContent=newName;
  
  // 3- Create a new spam deleteBtn for the button delete, class name = delete
  let deleteBtn=document.createElement("span");
  deleteBtn.className="delete";
  deleteBtn.textContent="delete";

  // 4- Create a new li
  let li=document.createElement("li");
  li.appendChild(newBook);
  li.appendChild(deleteBtn);

  // 5- Add bookName and deleteBtn to li and li to the  bookList UL
  bookList.appendChild(li);
}

function searchBook() {
  // 1- Get the search text
  let userSearch=searchBookInput.value.toUpperCase();
 
  // 2- Loop on all LI
  let allBooks=bookList.querySelectorAll("li");
  for (index in allBooks){
    let book=allBooks[index];
    let bookTitle=book.querySelector(".name").textContent;

    // Update the style of the LI (visible or hidden)
    if (bookTitle.toUpperCase().indexOf(userSearch) > -1){
      book.style.display="";
    }
    else {
      book.style.display="none";
    }
  }
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
