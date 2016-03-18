import myLib from '../src'

describe('my-lib', () => {
  it('should return a hello message', () => {
    expect(myLib('World')).to.equal('Hello World')
  })
})
