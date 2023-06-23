import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
    it('renders the footer with the correct text', () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText((content, element) => {
        return (
        content === 'Need to reach us? Drop us a line at:' &&
        element.tagName.toLowerCase() === 'a'
        );
    });
    expect(footerText).toBeInTheDocument();
    });
});