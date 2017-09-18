import escape from '../src/escape'

describe('escape', () => {
  it('escapes dangerous symbols', () => {
    expect(escape('[line\nline\rpipe|]')).toEqual('|[line|nline|rpipe|||]')
  })

  it('handles numbers', () => {
    expect(escape(1)).toEqual('1')
  })

  it('handles booleans', () => {
    expect(escape(true)).toEqual('true')
    expect(escape(false)).toEqual('false')
  })

  it('handles mistakes', () => {
    expect(escape(null)).toEqual('')
  })
})
