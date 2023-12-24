
// ------------------------------------------------------------------------------
//	EXERCICE 1 
// -----------------------------------------------------------------------------

// Write your code here

// function countDigit(num){
//     let boo=false;
//     if ( num<10){
//         boo=true;
//     }
//     return boo;
// }

// let array =[22, 33, 4, 2];
// let isValue=true;
// let result = "This array is empty";
// if (array!=[]){
//     for (let value of array){
//         nb=countDigit(value);
//         if (nb && isValue){
//             result = "Invalid array";
//             isValue=false;
//         }
//         else if(isValue) {
//             result="Valid array";
//         }
//     }
// }
// console.log(result);





// ------------------------------------------------------------------------------
//	EXERCICE 2 
// ------------------------------------------------------------------------------

// Input to test
// let text = "hello! welcome to web programing at pnc"
 
// // // // Write your code here
// let newText="";
// let newArray = [];
// for (index in text) {
//     if (text[index]!=" "){
//         newText+=text[index];
//     }
// 	if (text[index] === " " || index == text.length-1){
// 		if (newText.slice(0,1).toLowerCase()!="w"){
// 			newArray.push(newText);
// 		}
// 		newText="";
//  }
// }
// console.log(newArray);

// ------------------------------------------------------------------------------
//	EXERCICE 3
// ------------------------------------------------------------------------------

// Input to test
let list = [2.2, 3, 2.4, 2.5, 10, 50, 90];

// Write your code here
let newList = [];
for (index in list){ 
    if (!(Number.isInteger(list[index]))){
        // newList.push(value);
        list.splice(index, 1);
    }
}
console.log(list);




// ------------------------------------------------------------------------------
//	EXERCICE 4
// ------------------------------------------------------------------------------

// Input to test
// let students = ["Romdul", "RomChong", "Kolap"]
// let countries = ["Canada", "Cambodia", "Thai"]
// let majors = ["SNA", "WEB", "Database"]

// // Write your code here
// newList=[];
// for (index in students){
//     let dic={};
//     dic["student"] = students[index];
//     dic["country"] = countries[index];
//     dic["major"] = majors[index];
//     newList.push(dic);
// }
// console.log(newList);


