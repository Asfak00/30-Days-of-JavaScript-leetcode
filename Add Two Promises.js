var addTwoPromises = async function (promise1, promise2) {
  let result1 = await promise1;
  let result2 = await promise2;
  return result1 + result2;
};
