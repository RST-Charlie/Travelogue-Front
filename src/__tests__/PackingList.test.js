import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PackingList from '../pages/PackingList';

describe('<PackingList />', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <PackingList />
            </BrowserRouter>
        );
    });

    it('allows a user to input information into the form', () => {
        const input = screen.getByPlaceholderText(/Add an item/i);
        fireEvent.change(input, { target: { value: 'Test input' } });
        expect(input.value).toBe('Test input');
    });

    it('renders "Add" on the button', () => {
        const addButton = screen.getByText(/Add/i);
        expect(addButton).toBeInTheDocument();
    });
});