import { describe, expect, test } from 'vitest'
import App from './App'
import { render } from '@testing-library/react'

describe('App.jsx...', () => {
    test('renders a welcome message', () => {
        const underTest = render(<App />)

        expect(underTest.getByText('Welcome to Evercraft!')).toBeTruthy()
    })
})