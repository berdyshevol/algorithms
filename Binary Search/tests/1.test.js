const { describe, test, expect } = require('@jest/globals');
const binarySearch = require('../1 Binary Search');

describe('binarySearch', () => {
  test('should return the index of the target if it exists in the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 3;
    const result = binarySearch(arr, target);
    const expected = 2;
    expect(result).toBe(expected);
  });

  test('should return -1 if the target does not exist in the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 11;
    const result = binarySearch(arr, target);
    const expected = -1;
    expect(result).toBe(expected);
  });

  test('should return -1 if the array is empty', () => {
    const arr = [];
    const target = 1;
    const result = binarySearch(arr, target);
    const expected = -1;
    expect(result).toBe(expected);
  });
});
