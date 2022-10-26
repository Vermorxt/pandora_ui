import { getEmailPattern, isValidEmail, VALID_EMAIL_PATTERN } from './get-email-pattern'

describe('testing math utilities', () => {
  test('get email pattern', () => {
    expect(getEmailPattern()).toBe(VALID_EMAIL_PATTERN)
  })

  test('emails should be valid', () => {
    expect(isValidEmail('test@test.test')).toBeTruthy()
    expect(isValidEmail('t@t.t')).toBeTruthy()
    expect(isValidEmail('0@test.te')).toBeTruthy()
    expect(isValidEmail('test.test.test@test.com')).toBeTruthy()
    expect(isValidEmail('test.test.100@test.t')).toBeTruthy()
    expect(isValidEmail('test?test@test.de')).toBeTruthy()
    expect(isValidEmail('t#1@t.t')).toBeTruthy()
  })

  test('emails should be invalid', () => {
    expect(isValidEmail('')).toBeFalsy()
    expect(isValidEmail(' test@test.de')).toBeFalsy()
    expect(isValidEmail('test@test.de ')).toBeFalsy()
    expect(isValidEmail('@test.com')).toBeFalsy()
    expect(isValidEmail('test@test.')).toBeFalsy()
    expect(isValidEmail('test@test')).toBeFalsy()
    expect(isValidEmail('test@')).toBeFalsy()
    expect(isValidEmail('test@test@.test.de')).toBeFalsy()
    expect(isValidEmail('test@.test.de')).toBeFalsy()
    expect(isValidEmail('test@@test.de')).toBeFalsy()
    expect(isValidEmail('test.test.de')).toBeFalsy()
    expect(isValidEmail('test@test.@')).toBeFalsy()
    expect(isValidEmail('@@@.@')).toBeFalsy()
    expect(isValidEmail(null as unknown as string)).toBeFalsy()
  })
})
