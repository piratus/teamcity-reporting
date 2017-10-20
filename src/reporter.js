import path from 'path'
import { testFailed, testFinished, testStarted, testSuiteFinished, testSuiteStarted } from './messages'


/**
 * @param {JestConfig} [globalConfig={}]
 * @param {ReporterOptions} [options={}]
 */
class JestTestReporter {
  constructor(globalConfig = {}, options = {}) {
    this.globalConfig = globalConfig
    this.options = options

    this.name = globalConfig.rootDir || 'Jest test suite'
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
    console.log(testSuiteStarted(this.relativePath(test.path)))
  }

  /**
   * @param {Test} test
   * @param {TestResult} testResult
   * @param {AggregatedResult} aggregatedResult
   */
  onTestResult(test, testResult, aggregatedResult) {  // eslint-disable-line no-unused-vars
    testResult.testResults.forEach(result => {
      const {duration = 0, failureMessages, fullName, status } = result
      console.log(testStarted(fullName))
      if (status !== 'passed') {
        console.log(testFailed(fullName, status, failureMessages, null, null))
      }
      console.log(testFinished(fullName, duration))

    })
    console.log(testSuiteFinished(this.relativePath(test.path)))
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
