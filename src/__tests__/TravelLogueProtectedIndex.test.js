import React from 'react' 
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import TravelLogueProtectedIndex from '../pages/TravelLogueProtectedIndex';
import mockTrips from '../mockTrips';
import { Button, Card } from 'reactstrap';

describe('<TravelLogueProtectedIndex />', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <TravelLogueProtectedIndex trips={mockTrips}/>
            </BrowserRouter>
        );
    });

    it('displays to a user saved trips', () => {
        mockTrips.forEach((trip) =>{
            expect(screen.getByText(trip.title)).toBeInTheDocument()
        })
    });
});