/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;

    functions.forEach((fn, i) => {
      fn()
        .then((result) => {
          results[i] = result;
          count++;

          if (count === functions.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
