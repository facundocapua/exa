import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getClosestOpenTime, isStoreOpen } from './store'

const hours = {
  mon: {
    open: '10:00',
    close: '18:00'
  },
  tue: {
    open: '09:00',
    close: '18:00'
  },
  wed: {
    open: '09:00',
    close: '18:00'
  },
  thu: {
    open: '09:00',
    close: '18:00'
  },
  fri: {
    open: '09:00',
    close: '18:00'
  },
  sat: {
    open: '09:00',
    close: '12:00'
  }
}

describe('isStoreOpen', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers()
  })

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers()
  })

  it('should return true if store is open', () => {
    const date = new Date('2023-01-07 11:00') // saturday
    vi.setSystemTime(date)

    expect(isStoreOpen(hours)).toBe(true)
  })

  it('should return false if the store is closed that day', () => {
    const date = new Date('2023-01-08 11:00') // sunday
    vi.setSystemTime(date)

    expect(isStoreOpen(hours)).toBe(false)
  })

  it('should return false if the store is closed that time', () => {
    const date = new Date('2023-01-07 13:00') // saturday
    vi.setSystemTime(date)

    expect(isStoreOpen(hours)).toBe(false)
  })
})

describe('getClosestOpenTime', () => {
  it('should return the closest open time on closed day', () => {
    const date = new Date('2023-01-08 13:00') // sunday
    vi.setSystemTime(date)

    expect(getClosestOpenTime(hours)).toStrictEqual(new Date('2023-01-09 10:00'))
  })

  it('should return the closest open time on open day and closed time', () => {
    const date = new Date('2023-01-09 21:00') // monday
    vi.setSystemTime(date)

    expect(getClosestOpenTime(hours)).toStrictEqual(new Date('2023-01-10 09:00'))
  })
})
