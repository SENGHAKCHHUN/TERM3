// 1- Get the list of books ( tips : use the querySelectorAll )
// TODO
let bookTitle=document.querySelectorAll(".book-name");


// 2- Display the number of books on paragrah "books-number"
// TODO
document.getElementById("books-number").innerHTML=bookTitle.length;


// 3- Display the title of the books  on paragrah "books-titles"
let arrayTitle=[];
let allTitles="";
bookTitle.forEach(title =>{
    allTitles+=title.textContent + ", ";
    // arrayTitle.push(title.textContent+" ");

})
document.getElementById("books-titles").innerHTML=allTitles;
// document.getElementById("books-titles").innerHTML=arrayTitle;






// ==========Test event========
let deleteBook=(event)=>{
    event.preventDefault();
    document.querySelectorAll("li")[0].remove()
}

let addBook=(event)=>{
    event.preventDefault();
    ul.appendChild(li);
}

let btn_delete=document.querySelectorAll(".delete");
btn_delete[0].addEventListener("click", deleteBook);


// ======= Add new element=====
let ul=document.querySelector("ul");
let li=document.createElement("li");
li.textContent="New Book";
console.log(li);

let btn_add=document.getElementById("add");
btn_add.addEventListener("click",addBook);




