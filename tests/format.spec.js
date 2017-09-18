import format from '../src/format'

describe('format function', () => {
  it('renders empty messages', () => {
    expect(format('messageName'))
      .toEqual('##teamcity[messageName]')
  })

  it('renders simple messages', () => {
    expect(format('messageName', 'Message text'))
      .toEqual("##teamcity[messageName 'Message text']")
  })

  it('renders complex messages', () => {
    expect(format('messageName', { text: 'Message text', status: 'SUCCESS' }))
      .toEqual("##teamcity[messageName text='Message text' status='SUCCESS']")
  })
})
