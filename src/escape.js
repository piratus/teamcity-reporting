/**
 * Escapes string for TeamCity output
 * @param {string} str raw output string
 * @returns {string} ready to be displayed in TeamCity
 */
export default function escape(str) {
  if (!str) {
    return ''
  }

  return String(str)
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
