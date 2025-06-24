function ReverseString(arr_string){
    let len = arr_string.length;
    let halflen = Math.floor(arr_string.length/2);
    // let j = len-1-i;
    for(let i=0; i<halflen; i++){
        // swap(i, j);
        let temp = arr_string[i];
        arr_string[i] = arr_string[len-1-i];
        arr_string[len-1-i] = temp;
    }
    return arr_string;
}

// let arr_string = ['a', 'k', 's', 'h', 'a', 'y'];
let arr_string = ['h', 'e', 'l', 'l', 'o'];
console.log(ReverseString(arr_string));