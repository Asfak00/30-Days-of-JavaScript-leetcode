class EventEmitter {
  eventMap = {};

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = [];
    }

    this.eventMap[eventName].push(callback);

    return {
      unsubscribe: () => {
        this.eventMap[eventName] = this.eventMap[eventName].filter(
          (cb) => cb !== callback
        );

        if (this.eventMap[eventName].length === 0) {
          delete this.eventMap[eventName];
        }
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.eventMap[eventName]) {
      return [];
    }

    return this.eventMap[eventName].map((cb) => cb(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
