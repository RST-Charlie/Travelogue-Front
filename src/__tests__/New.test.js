import React from 'react' 
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import TravelLogueNew from '../pages/TravelLogueNew';

describe('<TravelLogueNew />', () => {

    it('allows a user to input information into the form', () => {
        render(<TravelLogueNew />, { wrapper: MemoryRouter });

        const input = screen.getByLabelText(/title/i);
        fireEvent.change(input, { target: { value: 'Test input' } });
        expect(input.value).toBe('Test input');
    });

    it('displays an error message when information is submitted and post is not valid', () => {
        render(<TravelLogueNew />, { wrapper: MemoryRouter });

        const submit = screen.getByText(/Add this trip to my Travelogue!/i);
        fireEvent.click(submit);
        expect(screen.getByText(/Please make sure you are logged in and have filled out all required fields: title, entry, country, and region./i))
    })

    it('updates the "international" value in the state when the switch is checked', () => {
        render(<TravelLogueNew />, { wrapper: MemoryRouter });
        
        const switchInput = screen.getByLabelText('International?', { id: "trip-international" })
        fireEvent.click(switchInput);
        
        expect(switchInput.checked).toBe(true);
    });

    it('calls createTrip and navigates when form is submitted with required fields', () => {
        const navigateMock = jest.fn();
        const currentUser = { id: '1' };
        const handleClickMock = jest.fn();
        const createTripMock = jest.fn();
    
        const { getByText, getByLabelText } = render(
        <TravelLogueNew currentUser={currentUser} createTrip={createTripMock} handleClick={handleClickMock} navigate={navigateMock} />, { wrapper: MemoryRouter });
    
        fireEvent.change(getByLabelText('Title*:'), { target: { value: 'Test Trip' } });
        fireEvent.change(getByLabelText('Entry*:'), { target: { value: 'Test Entry' } });
        fireEvent.change(getByLabelText('Country*:'), { target: { value: 'Test Country' } });
        fireEvent.change(getByLabelText('Region*:'), { target: { value: 'Test Region' } });
    
        const submit = getByText('Add this trip to my Travelogue!');
        fireEvent.click(submit)
    
        expect(handleClickMock).toHaveBeenCalledWith({
        title: 'Test Trip',
        entry: 'Test Entry',
        country: 'Test Country',
        region: 'Test Region',
        user_id: '1'
        });
        expect(navigateMock).toHaveBeenCalledWith('/mytrips');
    });
    
    it('sets an error state when required fields are not filled', () => {
        const createTripMock = jest.fn();
        const { getByText } = render(
        <TravelLogueNew createTrip={createTripMock} />, { wrapper: MemoryRouter });
    
        fireEvent.click(getByText('Add this trip to my Travelogue!'));
    
        expect(getByText('Error! Please make sure you are logged in and have filled out all required fields: title, entry, country, and region.')).toBeInTheDocument();
    });
});
    