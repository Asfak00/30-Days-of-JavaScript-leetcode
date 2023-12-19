/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let result = init;
  for (let i in nums) {
    result = fn(result, nums[i]);
  }

  return result;
};
