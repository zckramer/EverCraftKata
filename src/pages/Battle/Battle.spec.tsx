import { describe, expect, it, test } from 'vitest'
import { render } from '@testing-library/react'
import Battle from './Battle'

describe('Battle.tsx ', () => {
    it('should render a Battle header', () => {
        const component = render(<Battle />);
        expect(component.getByText('Battle')).toBeTruthy();
    });

});