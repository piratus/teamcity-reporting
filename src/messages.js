import tsm, { Message } from 'teamcity-service-messages'

tsm.autoFlowId = false;

const format = (name, args) => new Message(name, args).toString()

/**
 * A generic TeamCity message
 * @param {string} text message text
 * @param {object} [args={}] extra arguments
 * @returns {string}
 */
export function message(text, args = {}) {
  return format('message', { text, ...args })
}

/**
 * Open a new message block
 * @param {string} name block name
 * @param {string|null} [description=null] optional block description
 * @param {object} [args={}] extra arguments
 * @returns {string}
 */
export function blockOpened(name, description=null, args={}) {
  return format('blockOpened', { name, description, ...args })
}

/**
 * Close a message block
 * @param {string} name block name
 * @param {object} [args={}] extra arguments
 * @returns {string}
 */
export function blockClosed(name, args={}) {
  return format('blockClosed', { name, ...args })
}

export function testSuiteStarted(name, args={}) {
  return format('testSuiteStarted', { name, ...args })
}

export function testSuiteFinished(name, args={}) {
  return format('testSuiteFinished', { name, ...args })
}

export function testStarted(name, captureStandardOutput=false, args={}) {
  if (captureStandardOutput === false) { captureStandardOutput = null }
  return format('testStarted', { name, captureStandardOutput, ...args })
}

export function testStdOut(name, out, args={}) {
  return format('testStdOut', { name, out, ...args })
}

export function testStdErr(name, out, args={}) {
  return format('testStdErr', { name, out, ...args })
}

export function testFailed(name, message, details, expected=null, actual=null, args={}) {
  return format('testFailed', { name, message, details, expected, actual, ...args })
}

export function testFinished(name, duration, args={}) {
  return format('testFinished', { name, duration, ...args })
}

export function inspectionType(id, name, description, category) {
  return format('inspectionType', { id, name, description, category })
}

export function inspection(typeId, message, file, line, SEVERITY='WARNING') {
  return format('inspection', { typeId, message, file, line, SEVERITY })
}

export function compilationStarted(compiler, args={}) {
  return format('compilationStarted', { compiler, ...args })
}

export function compilationFinished(compiler, args={}) {
  return format('compilationFinished', { compiler, ...args })
}

export function progressMessage(message) {
  return format('progressMessage', message)
}

export function progressStart(message) {
  return format('progressStart', message)
}

export function progressFinish(message) {
  return format('progressFinish', message)
}

export function buildProblem(description, identity) {
  return format('buildProblem', { description, identity })
}
export function buildStatus(status, text) {
  return format('buildStatus', { status, text })
}
