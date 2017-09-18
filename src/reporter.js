import path from 'path'
import tsm from './index'


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
    console.log(tsm.testSuiteStarted(this.name, this.globalConfig))
  }

  /**
   * @param {Test} test
   */
  onTestStart(test) {
    console.log(tsm.testSuiteStarted(this.relativePath(test.path)))
  }

  /**
   * @param {Test} test
   * @param {TestResult} testResult
   * @param {AggregatedResult} aggregatedResult
   */
  onTestResult(test, testResult, aggregatedResult) {  // eslint-disable-line no-unused-vars
    testResult.testResults.forEach(result => {
      const {duration = 0, failureMessages, fullName, status } = result
      console.log(tsm.testStarted(fullName))
      if (status !== 'passed') {
        console.log(tsm.testFailed(fullName, status, failureMessages, null, null))
      }
      console.log(tsm.testFinished(fullName, duration))

    })
    console.log(tsm.testSuiteFinished(this.relativePath(test.path)))
  }

  /**
   * @param {Set<Context>} contexts
   * @param {AggregatedResult} results
   */
  onRunComplete(contexts, results) {  // eslint-disable-line no-unused-vars
    console.log(tsm.testSuiteFinished(this.name))
  }

  /**
   * @returns {?Error}
   */
  getLastError() {
  }

}

module.exports = JestTestReporter
