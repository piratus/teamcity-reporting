import escape from './escape';

function formatArgs(args) {
    if (typeof args === 'string') {
      return `'${escape(args)}'`
    }

    return Object.keys(args)
        .map((key) => `${key}='${escape(args[key])}'`)
        .join(' ')
  }

/**
 * Creates a string message understandable by TeamCity
 * @param {string} type message type
 * @param {...} [args] message arguments
 * @returns {string} formatted message
 */
export default function format(type, ...args) {
  if (args.length === 0) {
    return `##teamcity[${type}]`
  }

  return `##teamcity[${type} ${args.map(formatArgs).join(' ')}]`
}
