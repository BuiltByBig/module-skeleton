const debug = require('debug')('my-lib')

/**
 * A description of my module...
 *
 * @param {String} [name] - The name to say hi to
 * @returns {String} - The welcome message
 * @module my-lib
 * @type {String}
 */
export default (name) => {
  debug('saying hello to', name)
  return `Hello ${name}`
}
