import sum from './sum'

describe('Math', () => {
  test('Should be able to sum A and B', () => {
    expect(sum(2, 2)).toBe(4)
  })

  test('Should be fail', () => {
    expect(sum(2, 2)).toBe(5)
  })
})
