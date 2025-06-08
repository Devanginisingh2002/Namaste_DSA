'Loops -> 01'
'for-loop'
//eg: 1
// for(let i=0; i<=5; i++){
//     console.log("Hello World", i);
// }
// console.log("Loops End")

// eg: 2
// for(let i=3; i<5; i++){
//     console.log("Hey");
// }

//eg: 3
// for(let i=0; i<=10; i=i+1){
//     console.log(i+1);
// }

// eg: 4
// for(let i=2; i<9; i=i+2){
//     console.log("Check", i);
// }

//eg: 5
// for(let i=5; i>=0; i--){
//     console.log("Hello", i);
// } 

//eg: 6 Infinite loop
// for(let i=1; i<0; i++){
//     console.log("Hello World", i);
// }

// eg: 7 function with loop
// function greet(i){
//     console.log("hello", i);
// }

// for(let i=0; i<10; i++){
//     greet(i);
// }

//eg: 8 Array with loop
let arr = [13, 26, 39, 52, 65, 78, 91, 103];
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])

/* Note: For finding the length of an array, we use arr.length */
let length = arr.length;
console.log("Length of an array:",length)  // Length of an array: 8 

// Even
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i]);
//     }
// }

// Odd
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 == 1 ){
//         console.log(arr[i]);
//     }
// }


'While - loop'
let i=0;
while(i<5){
    console.log("Hellow");
    i++;
}