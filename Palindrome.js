function palindrome(n) {
  let reverse = 0;
  while (n > 0) {
    let rem = n % 10;
    reverse = 10 * reverse + rem;
    n = n / 10;
  }
  if (reverse == n) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome(121));