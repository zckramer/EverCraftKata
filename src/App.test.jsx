import { describe, expect, test } from 'vitest'
import App from './App'
import { render } from '@testing-library/react'

describe('App.jsx...', () => {
    test('does nothing...', () => {
        const underTest = render(<App />)

        expect(underTest).toBeTruthy()
    })
})