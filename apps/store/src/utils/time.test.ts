import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { inBetweenTimes } from './time'

describe('inBetweenTimes', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers()
    const date = new Date('2021-01-01 10:00')
    vi.setSystemTime(date)
  })

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers()
  })

  it('should return true if time is between start and end', () => {
    const start = '10:00'
    const end = '20:00'
    const time = '15:00'

    expect(inBetweenTimes(start, end, time)).toBe(true)
  })

  it('should return false if time is before start', () => {
    const start = '10:00'
    const end = '20:00'
    const time = '09:00'

    expect(inBetweenTimes(start, end, time)).toBe(false)
  })

  it('should return false if time is after end', () => {
    const start = '10:00'
    const end = '20:00'
    const time = '21:00'

    expect(inBetweenTimes(start, end, time)).toBe(false)
  })

  it('should return true if time is equal to start', () => {
    const start = '10:00'
    const end = '20:00'
    const time = '10:00'

    expect(inBetweenTimes(start, end, time)).toBe(true)
  })

  it('should return true if time is equal to end', () => {
    const start = '10:00'
    const end = '20:00'
    const time = '20:00'

    expect(inBetweenTimes(start, end, time)).toBe(true)
  })

  it('should return true if time is undefined', () => {
    const start = '10:00'
    const end = '20:00'
    const time = undefined

    expect(inBetweenTimes(start, end, time)).toBe(true)
  })

  it('should return true if time is undefined and start and end are equal', () => {
    const start = '10:00'
    const end = '10:00'
    const time = undefined

    expect(inBetweenTimes(start, end, time)).toBe(true)
  })

  it('should return false if time is undefined and current time is not between start and end', () => {
    const start = '15:00'
    const end = '20:00'
    const time = undefined

    expect(inBetweenTimes(start, end, time)).toBe(false)
  })
})
