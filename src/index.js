
/**
 * A description of my module...
 *
 * @module my-lib
 */
const debug = require('debug')('my-lib')

/**
 * Say hello!
 *
 * @param {String} [name] - The name to say hi to
 * @returns {String} - The welcome message
 * @name hello
 */
export default (name) => {
  debug('saying hello to', name)
  return `Hello ${name}`
}
