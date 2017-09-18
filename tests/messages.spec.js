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
        .toBe("##teamcity[message text='with text']")
    })
  })

  describe('blocks', () => {
    describe('blockOpened', () => {
      it('can be opened', () => {
        expect(blockOpened('block name'))
          .toBe("##teamcity[blockOpened name='block name']")
      })

      it('can haz description', () => {
        expect(blockOpened('block name', 'and some description'))
          .toBe("##teamcity[blockOpened name='block name' description='and some description']")
      })
    })

    it('can be closed', () => {
      expect(blockClosed('block name'))
        .toBe("##teamcity[blockClosed name='block name']")
    })
  })

  describe('test suites', () => {
    it('can be started', () => {
      expect(testSuiteStarted('suite name'))
        .toBe("##teamcity[testSuiteStarted name='suite name']")
    })

    it('can be finished', () => {
      expect(testSuiteFinished('suite name'))
        .toBe("##teamcity[testSuiteFinished name='suite name']")
    })
  })

  describe('individual tests', () => {
    describe('testStarted', () => {
      it('can be started', () => {
        expect(testStarted('test name'))
          .toBe("##teamcity[testStarted name='test name']")
      })

      it('can capture stdout', () => {
        expect(testStarted('test name', true))
          .toBe("##teamcity[testStarted name='test name' captureStandardOutput='true']")
      })
    })

    describe('testFinished', () => {
      it('can be finished', () => {
        expect(testFinished('test name'))
          .toBe("##teamcity[testFinished name='test name']")
      })

      it('can haz duration', () => {
        expect(testFinished('test name', 10))
          .toBe("##teamcity[testFinished name='test name' duration='10']")
      })
    })
  })
})
