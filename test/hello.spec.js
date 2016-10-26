const expect = require('chai').expect
const hello = require('../src/hello')

describe('hello', () => {
  it('should return a string with hello with supplied argument', () => {
    expect(hello('World')).to.equal('Hello World')
    expect(hello('Supasate')).to.equal('Hello Supasate')
  })
})
