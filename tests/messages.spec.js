import {
  blockClosed,
  blockOpened,
  message,
  testFinished,
  testStarted,
  testSuiteFinished,
  testSuiteStarted,
} from '../src/messages'

describe('Messages', () => {
  describe('text messages', () => {
    it('has text', () => {
      expect(message('with text'))
        .toMatch(/^##teamcity\[message text='with text'(.*)]$/)
    })
  })

  describe('blocks', () => {
    describe('blockOpened', () => {
      it('can be opened', () => {
        expect(blockOpened('block name'))
          .toMatch(/^##teamcity\[blockOpened name='block name'(.*)]$/)
      })

      it('can haz description', () => {
        expect(blockOpened('block name', 'and some description'))
          .toMatch(/^##teamcity\[blockOpened name='block name' description='and some description'(.*)]$/)
      })
    })

    it('can be closed', () => {
      expect(blockClosed('block name'))
        .toMatch(/^##teamcity\[blockClosed name='block name'(.*)]$/)
    })
  })

  describe('test suites', () => {
    it('can be started', () => {
      expect(testSuiteStarted('suite name'))
        .toMatch(/^##teamcity\[testSuiteStarted name='suite name'(.*)]$/)
    })

    it('can be finished', () => {
      expect(testSuiteFinished('suite name'))
        .toMatch(/^##teamcity\[testSuiteFinished name='suite name'(.*)]$/)
    })
  })

  describe('individual tests', () => {
    describe('testStarted', () => {
      it('can be started', () => {
        expect(testStarted('test name'))
          .toMatch(/^##teamcity\[testStarted name='test name'(.*)]$/)
      })

      it('can capture stdout', () => {
        expect(testStarted('test name', true))
          .toMatch(/^##teamcity\[testStarted name='test name' captureStandardOutput='true'(.*)]$/)
      })
    })

    describe('testFinished', () => {
      it('can be finished', () => {
        expect(testFinished('test name'))
          .toMatch(/^##teamcity\[testFinished name='test name'(.*)]$/)
      })

      it('can haz duration', () => {
        expect(testFinished('test name', 10))
          .toMatch(/^##teamcity\[testFinished name='test name' duration='10'(.*)]/)
      })
    })
  })
})
