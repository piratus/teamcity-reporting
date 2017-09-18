/**
 * Generate a new FlowId
 * @returns {number} flowId
 */
export default function flowId() {
  return Math.floor(Math.random() * (1e10 - 1e6 + 1)) + 1e6
}
