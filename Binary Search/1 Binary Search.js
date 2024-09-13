const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor(left + (right - left) / 2);
    if (target === arr[middle]) return middle;

    if (target < arr[middle]) right = middle - 1;
    else left = left + 1;
  }

  return -1;
};

module.exports = binarySearch;
