function palindrome(n) {
  // handle negative case
  if(n < 0) return false;

  let nCopy = n;
  let reverse = 0;
  while (n > 0) {
    let rem = n % 10;
    reverse = 10 * reverse + rem;
    n = Math.floor(n / 10);
  }
  if (nCopy == reverse) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome(121));       // true
console.log(palindrome(234));       // false
console.log(palindrome(-9898));     // false