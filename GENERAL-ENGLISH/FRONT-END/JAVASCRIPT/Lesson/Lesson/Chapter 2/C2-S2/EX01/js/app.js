

let showImage = () => {
    images.forEach(image=>{
        image.style.display = "block";
    });
}
let hideImage = () => {
   images.forEach(image => {
    image.style.display="none";
   });
}
let images=document.querySelectorAll(".card");
let btnShow = document.getElementById("btn-show");
let btnHide = document.getElementById("btn-hide");

btnHide.addEventListener('click', hideImage);
btnShow.addEventListener('click', showImage);