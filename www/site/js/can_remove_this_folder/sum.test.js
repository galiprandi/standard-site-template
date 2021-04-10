import {sum} from './sum.js'
// const sum = require('./sum.js')

describe('For test suite status check', () => {
  it('Sum 5 + 2 should by 7', () => {
    expect(sum(5, 2)).toBe(7)
  })
})
