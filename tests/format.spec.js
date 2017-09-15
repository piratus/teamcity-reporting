import format from '../src/format'

describe('format function', () => {
  it('renders simple messages', () => {
    expect(format('messageName'))
      .toEqual('##teamcity[messageName]')
  })

  it('renders text messages', () => {
    expect(format('messageName', 'Message text'))
      .toEqual("##teamcity[messageName 'Message text']")
  })
})
