
function mergeSort(arr) {
  if (arr.length === 1) {
   return arr;
  }
  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, length);

  return stich(mergeSort(left), mergeSort(right));
}

function stich(left, right) {
  const result = [];
  while(left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while(left.length) {
    result.push(left.shift());
  }
  while(right.length) {
    result.push(right.shift());
  }
  return result;
}

function quickSort(nums) {
  if (nums.length < 2) {
    return nums;
  }
  const pivot = nums.pop();
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] < pivot ? left.push(nums[i]) : right.push(nums[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
