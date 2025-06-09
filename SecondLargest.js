"Second Largest";
function secondLargest(arr) {
  let first_largest = -Infinity;
  let second_largest = -Infinity;

  // corner cases: if arr-length, less than 2.
  if (arr.length < 2) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first_largest) {
      second_largest = first_largest;
      first_largest = arr[i];
    } else if (arr[i] > second_largest && arr[i] != second_largest) {
      second_largest = arr[i];
    }
  }
  return second_largest;
}
let arr = [10, 20, 30, 30, 20, 10, 90];
let result = secondLargest(arr);
console.log(result);
