import sum from './sum'

describe('Math', () => {
  test('Should be able to sum A and B', () => {
    expect(sum(2, 2)).toBe(4)
  })

  test('Should be able to sum 2 and 3', () => {
    expect(sum(2, 3)).toBe(5)
  })
})
