const leftBinarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left + 2 <= right) {
    middle = left + Math.floor((right - left) / 2);
    if (target === arr[middle])
      right = middle; // this line is different from binarySearch
    else if (target < arr[middle])
      right = middle; // not middle - 1
    else left = middle; // not middle + 1
  }

  if (target === arr[left]) return left;
  if (target === arr[right]) return right;
  return -1;
};

module.exports = leftBinarySearch;
