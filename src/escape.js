/**
 * Escapes string for TeamCity output
 * @param {(string|number|boolean|null)} value raw output value
 * @returns {string} ready to be displayed in TeamCity
 */
export default function escape(value) {
  if (value === true) {
    return 'true'
  }
  if (value === false) {
    return 'false'
  }

  if (!value) {
    return ''
  }

  return String(value)
    .replace(/\|/g, '||')
    .replace(/\n/g, '|n')
    .replace(/\r/g, '|r')
    .replace(/\[/g, '|[')
    .replace(/\]/g, '|]')
    .replace(/\u0085/g, '|x') // next line
    .replace(/\u2028/g, '|l') // line separator
    .replace(/\u2029/g, '|p') // paragraph separator
    .replace(/'/g, '|\'')
}
