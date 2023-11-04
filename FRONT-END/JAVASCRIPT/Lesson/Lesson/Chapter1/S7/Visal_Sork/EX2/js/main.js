
let array=[1,3,5,0,2,0,1,1,2,3,];
let sum=0;
let isTrue=false;
for (value of array){
    if(value==1 && !(isTrue)) {
        isTrue=true;
    }
    else if(value==0){
        isTrue=false;
    }
    else if(isTrue){
        sum+=value;
    }
    
}
console.log(sum);