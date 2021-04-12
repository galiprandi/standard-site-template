import { sum } from './sum.js'
// const sum = require('./sum.js')

describe('For check if Jest is working', () => {
  it('Sum 5 + 2 should by 7', () => {
    expect(sum(5, 2)).toBe(7)
  })

  it('Sum strings of numbers should by work them', () => {
    expect(sum('5', '2')).toBe(7)
  })

  it('Sum strings should by Nan ', () => {
    expect(sum('hi', 'bye')).toBe(NaN)
  })
})
