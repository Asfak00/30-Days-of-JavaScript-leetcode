class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    if (value === 0) {
      return this;
    }

    this.value += value;

    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    if (value === 0) {
      return this;
    }

    this.value -= value;

    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    if (value === 0) {
      this.value = 0;
      return this;
    }

    this.value *= value;

    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new Error("Cannot divide by 0");
    }

    this.value /= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    if (value === 0) {
      this.value = 1;
      return this;
    }

    let result = this.value;
    for (let i = 1; i < value; i++) {
      result *= this.value;
    }

    this.value = result;

    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.value;
  }
}
