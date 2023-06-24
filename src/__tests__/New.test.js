import React from 'react' 
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TravelLogueNew from '../pages/TravelLogueNew';
import userEvent from '@testing-library/user-event';

describe('<TravelLogueNew />', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <TravelLogueNew />
            </BrowserRouter>
        );
    });

    it('allows a user to input information into the form', () => {
        const input = screen.getByLabelText(/title/i);
        fireEvent.change(input, { target: { value: 'Test input' } });
        expect(input.value).toBe('Test input');
    });
});