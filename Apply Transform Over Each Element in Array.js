/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const result = new Array(arr.length);
  for (let i in arr) {
    result[i] = fn(arr[i], Number(i));
  }

  return result;
};
