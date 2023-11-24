
// create card
let card = document.createElement("div");
card.className = "card";
document.body.appendChild(card);

// create image element and appendChild it to the card
let img = document.createElement("img");
img.src = "image/image.jpg";
card.appendChild(img);

// create paragraph element and appendChild it to the card
let text = document.createElement("p");
text.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat quas impedit rem labore animi itaque dignissimos earum! Rem, harum reprehenderit? A quaerat quas amet earum ipsam placeat recusandae corrupti?";

//create element a link of w3schools in text
let link = document.createElement("a");
link.href="https://www.w3schools.com/";
link.textContent = "Google";
card.appendChild(text);
text.appendChild(link);

