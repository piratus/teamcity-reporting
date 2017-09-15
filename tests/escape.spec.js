import escape from '../src/escape'

describe('escape', () => {
  it('escapes dangerous symbols', () => {
    expect(escape('[line\nline\rpipe|]')).toEqual('|[line|nline|rpipe|||]')
  })

  it('handles numbers', () => {
    expect(escape(1)).toEqual('1')
  })

  it('handles mistakes', () => {
    expect(escape(null)).toEqual('')
  })
})
