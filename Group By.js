/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let result = {};
  for (let obj of this) {
    let key = fn(obj);
    result[key] = result[key] || [];
    result[key].push(obj);
  }

  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
