'use strict'

/**
 * @module array-base
 * @example
 * const ArrayBase = require('array-base')
 * class Collection extends ArrayBase {}
 */

 /**
  * @alias module:array-base
  */
class ArrayBase extends Array {
  /**
   * Load an array with the supplied items
   * @param {any[]}
   * @chainable
   */
  load (items) {
    const arrayify = require('array-back')
    this.clear()
    for (const item of arrayify(items)) {
      this.push(item)
    }
    return this
  }

  /**
   * Empty the array.
   * @chainable
   */
  clear () {
    this.length = 0
    return this
  }
}

module.exports = ArrayBase
