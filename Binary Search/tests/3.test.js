const { describe, test, expect } = require('@jest/globals');
const leftBinarySearchWithinInterval = require('../3 Left Binary Search within Interval');

describe('leftBinarySearchWithinInterval', () => {
  test('should return the leftmost index of the target if it exists in the array', () => {
    const arr = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 3;
    const result = leftBinarySearchWithinInterval(arr, target);
    const expected = 2;
    expect(result).toBe(expected);
  });

  test('should return -1 if the target does not exist in the array', () => {
    const arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
    const target = 3;
    const result = leftBinarySearchWithinInterval(arr, target);
    const expected = -1;
    expect(result).toBe(expected);
  });

  test('should return 0 if array has the same element', () => {
    const arr = [3, 3, 3, 3, 3, 3];
    const target = 3;
    const result = leftBinarySearchWithinInterval(arr, target);
    const expected = 0;
    expect(result).toBe(expected);
  });

  test('if array has 2 elements and the target is the first element, should return 0', () => {
    const arr = [3, 4];
    const target = 3;
    const result = leftBinarySearchWithinInterval(arr, target);
    const expected = 0;
    expect(result).toBe(expected);
  });

  test('if array has 2 elements and the target is the second element, should return 1', () => {
    const arr = [3, 4];
    const target = 4;
    const result = leftBinarySearchWithinInterval(arr, target);
    const expected = 1;
    expect(result).toBe(expected);
  });

  test('if array has 1 element and it is the target, should return 0', () => {
    const arr = [3];
    const target = 3;
    const result = leftBinarySearchWithinInterval(arr, target);
    const expected = 0;
    expect(result).toBe(expected);
  });

  test('if array has 1 element and it is not the target, should return -1', () => {
    const arr = [3];
    const target = 4;
    const result = leftBinarySearchWithinInterval(arr, target);
    const expected = -1;
    expect(result).toBe(expected);
  });

  test('should return -1 if the array is empty', () => {
    const arr = [];
    const target = 1;
    const result = leftBinarySearchWithinInterval(arr, target);
    const expected = -1;
    expect(result).toBe(expected);
  });
});
