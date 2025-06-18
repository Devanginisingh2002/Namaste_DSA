function Palindrome(num){

    let num = 9832;    // 2389
    let reverse = 0;
    while(num > 0){
        let remain = num % 10;
        reverse += remain;
        num = num / 10;
    }
   return reverse;
}

console.log(Palindrome(num));