import format from './format';

/**
 * Send a generic message to TeamCity
 * @param {string} value
 * @param {object} args
 */
export function message(value, args = {}) {
  console.log(format('message', {value, ...args}))
}