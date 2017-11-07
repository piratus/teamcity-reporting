import path from 'path'
import { testFailed, testFinished, testStarted, testSuiteFinished, testSuiteStarted } from './messages'
import { default as getFlowId } from './flow-id'


/**
 * @param {JestConfig} [globalConfig={}]
 * @param {ReporterOptions} [options={}]
 */
class JestTestReporter {
  constructor(globalConfig = {}, options = {}) {
    this.globalConfig = globalConfig
    this.options = options

    this.name = path.dirname(globalConfig.rootDir) || 'Jest test suite'
    this._suites = {}
  }

  relativePath(absolutePath) {
    const { rootDir } = this.globalConfig
    return rootDir ? path.relative(rootDir, absolutePath) : absolutePath
  }

  /**
   * @param {AggregatedResult} results
   * @param {ReporterOnStartOptions} options
   */
  onRunStart(results, options) {  // eslint-disable-line no-unused-vars
    console.log(testSuiteStarted(this.name))
  }

  /**
   * @param {Test} test
   */
  onTestStart(test) {
    const relPath = this.relativePath(test.path)
    const flowId = this._suites[relPath] = getFlowId()
    console.log(testSuiteStarted(relPath, { flowId }))
  }

  /**
   * @param {Test} test
   * @param {TestResult} testResult
   * @param {AggregatedResult} aggregatedResult
   */
  onTestResult(test, testResult, aggregatedResult) {  // eslint-disable-line no-unused-vars
    const relPath = this.relativePath(test.path)
    const flowId = this._suites[relPath]

    testResult.testResults.forEach(result => {
      const {duration = 0, failureMessages, fullName, status } = result
      console.log(testStarted(fullName, false, { flowId }))
      if (status !== 'passed') {
        console.log(testFailed(fullName, status, failureMessages, null, null, { flowId }))
      }
      console.log(testFinished(fullName, duration, { flowId }))

    })
    console.log(testSuiteFinished(relPath, { flowId }))
  }

  /**
   * @param {Set<Context>} contexts
   * @param {AggregatedResult} results
   */
  onRunComplete(contexts, results) {  // eslint-disable-line no-unused-vars
    console.log(testSuiteFinished(this.name))
  }
}

module.exports = JestTestReporter
