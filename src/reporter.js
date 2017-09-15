import format from './format'

function message(text) {
  console.log(format('format', text))
}

class JestTestReporter {
  /**
   * @param {JestConfig} [globalConfig={}]
   * @param {ReporterOptions} [options={}]
   */
  constructor(globalConfig = {}, options = {}) {
    this.globalConfig = globalConfig
    this.options = options
  }

  /**
   * @param {AggregatedResult} results
   * @param {ReporterOnStartOptions} options
   */
  onRunStart(results, options) {
    // console.log([Object.keys(results), Object.keys(options)])
    message(`::onRunStart(suites=${results.numTotalTestSuites}, tests=${results.numTotalTests}, estimated=${options.estimatedTime})`)
  }

  /**
   * @param {Test} test
   */
  onTestStart(test) {
    message(`::onTestStart(path=${test.path}`)
  }

  /**
   * @param {Test} test
   * @param {TestResult} testResult
   * @param {AggregatedResult} aggregatedResult
   */
  onTestResult(test, testResult, aggregatedResult) {
    message(`::onTestResult(path=${test.path}, result=${testResult.failureMessage ? 'ERROR' : 'SUCCESS'}})`)
  }

  /**
   * @param {Set<Context>} contexts
   * @param {AggregatedResult} results
   */
  onRunComplete(contexts, results) {
    message(`::onRunComplete(${results.success})`)
  }

  /**
   * @returns {?Error}
   */
  getLastError() {
    message('::getLastError')
  }

}

module.exports = JestTestReporter
