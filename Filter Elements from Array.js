/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const result = [];
  for (let i in arr) {
    if (fn(arr[i], Number(i))) {
      result.push(arr[i]);
    }
  }

  return result;
};
