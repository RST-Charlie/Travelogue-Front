import React from 'react';
import { render } from '@testing-library/react';
import AboutUs from '../pages/AboutUs';

describe('AboutUs Component', () => {
    it('renders without errors', () => {
        render(<AboutUs />);
    });

    it('should navigate to ... when link is clicked', () => {
        const { getByTestId } = render(<a data-testid='link' href="https://www.linkedin.com/in/surielis-rodriguez/">Click Me</a>);
        expect(getByTestId('link')).toHaveAttribute('href', 'https://www.linkedin.com/in/surielis-rodriguez/');
    });
})