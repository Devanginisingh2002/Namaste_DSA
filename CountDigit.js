"Two Ways to solve this problem";

"First Way";
function countDigit(num) {
  // handling edge case: for negative number
  num = Math.abs(num);
  // for 0:
  if (num == 0) return 1;

  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
console.log(countDigit(12900));
console.log(countDigit(-12900));
console.log(countDigit(0));

("Second Way");
// 2nd way to solve this problem.
// let num = 459;
// let count = num.toString().length;
// console.log(count);
