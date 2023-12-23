/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let items = arr1.concat(arr2);

  let result = {};

  for (const obj of items) {
    if (!result[obj.id]) {
      result[obj.id] = obj;
      continue;
    }

    result[obj.id] = { ...result[obj.id], ...obj };
  }

  return Object.values(result);
};

// join two arrays by id
// return array of objects

//   Input: (arr1 = [
//     { id: 1, x: 1 },
//     { id: 2, x: 9 },
//   ]),
//     (arr2 = [{ id: 3, x: 5 }]);
//   Output: [
//     { id: 1, x: 1 },
//     { id: 2, x: 9 },
//     { id: 3, x: 5 },
//   ];
