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

    it('renders without crashing', () => {

    });

    it('displays the SignUp component', () => {
        const signUpComponent = screen.getByTestId('signup-component');
        expect(signUpComponent).toBeInTheDocument();
    });
});
