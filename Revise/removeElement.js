function RemoveElement(arr, val){
    let x = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] != val){
            arr[x] = arr[i];
            x++;
        }
    }
    return x;
}

let arr = [2,3,4,51,1,2,3,3,3,4];
let val = 3;
console.log(RemoveElement(arr, val));