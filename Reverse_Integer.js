function reverseInteger(n){

    //handling negative case
    let nCopy = n;
    n = Math.abs(n);
    let reverse = 0;
    while(n>0) {
        let lastDigit = n % 10;
        reverse = (10*reverse) + lastDigit;
        n = Math.floor(n/10);
    }
    
    // Handling the case 2^31 to 2^31-1
    let limit = Math.pow(2, 31);
    // let limit = 2**31;
    if(reverse < -limit || reverse > limit) return 0;
    
    return (nCopy < 0) ? -reverse : reverse;
}

let n = -123;
console.log(reverseInteger(n));