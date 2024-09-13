const leftBinarySearchWithinInterval = (arr, target) => {
  let left = -1;
  let right = arr.length;
  let middle;

  while (left + 2 <= right) {
    middle = left + Math.floor((right - left) / 2);
    if (target <= arr[middle]) right = middle;
    else left = middle;
  }

  if (right < arr.length && target === arr[right]) return right;

  return -1;
};

module.exports = leftBinarySearchWithinInterval;
