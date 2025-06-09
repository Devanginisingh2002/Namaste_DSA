"Question Practice";

"Question 1";
// Write a function, that searches for an element in an array and returns the index, if element is not present in an array returns -1:  --> Linear Search

/* 
function searchElement(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      console.log(i);       // return index
    }
  }
  return -1;
}
let arr = [10, 20, 30, 40, 50];
let key = 30; // returns 2
searchElement(arr, key);
*/

"Question 2";
// Write a fxn that returns the number of negative numbers in an array.

/*I think of this logic: 
function negativeArray(arr, check){
    
for(let i=0; i<arr.length; i++){
    if(arr[i] < 0){
        check.push(arr[i]);
        // return arr[i];
    }
}
return check.length;
}

let arr = [2,3,-5,3,-6,7,-8,-9,-10,2,3];
let check = [];
console.log(negativeArray(arr, check));
*/

/* Course: Solution 
function negativeCount(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}

let arr = [2,3,-5,3,-6,7,-8,-9,-10,2,3];
console.log(negativeCount(arr));
*/

"Question 3";
// Write a fxn that returns the largest in an array.
/* 
function largest(arr) {
  let largest = arr[0];     //-Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
let arr = [-2, -3, -10, -7];
console.log(largest(arr));
*/

"Question 4";
// Write a fxn that returns the largest in an array.
function smallest(arr) {
  let smallest = arr[0];    //+Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
let arr = [2,3,4,5,6,1,2,3,4];
console.log(smallest(arr));
