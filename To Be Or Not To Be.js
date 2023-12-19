/**
 * @param {string} val
 * @return {Object}
 */
var expect = (target) => ({
  toBe(val) {
    if (val === target) return true;
    throw new Error("Not Equal");
  },

  notToBe(val) {
    if (val !== target) return true;
    throw new Error("Equal");
  },
});

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
