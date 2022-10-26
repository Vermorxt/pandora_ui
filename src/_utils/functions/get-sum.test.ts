import { sum } from './get-sum'

describe('testing math utilities', () => {
  test('the sum of values should be 9', () => {
    const getSum = sum(1, 3, 5)
    const result = 9

    expect(getSum).toBe(result)
  })

  test('should get negative values', () => {
    const getSum = sum(1, 3, -10)
    const result = -6

    expect(getSum).toBe(result)
  })

  test('should handle no function arguments toBe 0', () => {
    const getSum = sum()
    const result = 0

    expect(getSum).toBe(result)
  })

  test('should handle 1 function arguments toBe 5', () => {
    const getSum = sum(5)
    const result = 5

    expect(getSum).toBe(result)
  })

  test('should handle operation as function argument', () => {
    const getSum1 = sum(10, 10 / 2, 10)
    const result1 = 25

    expect(getSum1).toBe(result1)
  })

  test('should handle negative operation as function argument', () => {
    const getSum1 = sum(10, -10 / 2, -10)
    const result1 = -5

    expect(getSum1).toBe(result1)
  })

  test('should handle string as function argument', () => {
    const getSum1 = sum(5, 'test', 200)
    const result1 = NaN

    expect(getSum1).toBe(result1)

    const getSum2 = sum('test', 200, 5)
    const result2 = NaN

    expect(getSum2).toBe(result2)

    const getSum3 = sum('test')
    const result3 = NaN

    expect(getSum3).toBe(result3)
  })
})
