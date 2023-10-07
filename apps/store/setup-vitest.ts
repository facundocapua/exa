import '@testing-library/jest-dom'
import { vi, beforeAll } from 'vitest'

vi.mock('zustand')
beforeAll(() => {
  vi.mock('next/router', () => require('next-router-mock'))
  // vi.mock('zustand', () => require('./__mocks__/zustand'))
})

// to make it works like Jest (auto-mocking)
