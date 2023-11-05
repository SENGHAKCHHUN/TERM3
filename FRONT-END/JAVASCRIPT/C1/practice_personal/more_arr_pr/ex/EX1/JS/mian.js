let input = prompt("Enter your array by using comma");
let arr = input.split(',');
let isRun = false;
if (arr.length > 1){
    for (let i = 0; i <arr.length; i++){
        if (arr[i] > 10 && arr[i] < 100 && ! isRun){
            isRun = false;
        }else{
            isRun = true
            console.log("Invalid array")
        }
    };
    if (! isRun){
        console.log("Valid array")
    }
}else{
    console.log("This array is empty")
}