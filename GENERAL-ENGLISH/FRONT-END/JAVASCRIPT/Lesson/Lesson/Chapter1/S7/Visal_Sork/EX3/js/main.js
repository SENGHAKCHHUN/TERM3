let arr1=[2,4,6];
let arr2=[3,1,0];
let newArr=[];
for (index in arr1) {
    if (arr1[index]>arr2[index]){
        newArr.push(arr1[index]);
    }
    else {
        newArr.push(arr2[index]);
    }
}
console.log(newArr);