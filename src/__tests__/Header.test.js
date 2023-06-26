import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
    it('renders the navbar with the correct text', () => {
        const { getByText } = render(<Header />);
        const homeLink = getByText(/RSTech/i);
        expect(homeLink).toBeInTheDocument();
    });
});