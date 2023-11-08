// normal color
function randomColor() {
    const colorCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', 'a', 'b', 'c', 'd', 'e', 'f']
    let color = "#"
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * colorCode.length)
        color += colorCode[index]
    }
    return color
    
}
// Gradient color
function randomGradientColor() {
    let randomOne = randomColor();
    let randomTwo = randomColor();
    let randomThree = randomColor();
    let gradient = 'linear-gradient('+'to top'+','+ randomOne+','+ randomTwo +','+randomThree +')';  
    // console.log(gradient);
    return gradient
    
}

document.addEventListener('click',function(){
    backgroundColor = randomGradientColor();
    document.body.style.backgroundImage = backgroundColor;
    document.getElementById("color").textContent = backgroundColor;
})
// set background color to body =  color code
// add text content to h1 = color code