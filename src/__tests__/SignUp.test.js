import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp';

describe('<SignUp />', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        );
    });

    it('has an email input', () => {
        const emailInput = screen.getByPlaceholderText('email');
        expect(emailInput).toBeInTheDocument();
    });
});
