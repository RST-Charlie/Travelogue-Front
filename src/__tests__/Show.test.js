import React from 'react' 
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import TravelLogueShow from '../pages/TravelLogueShow';
import mockTrips from '../mockTrips';
import { Button, Card } from 'reactstrap';

describe('<TravelLogueShow />', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/TravelLogueShow/1"]}>
                <Routes>
                    <Route path="/TravelLogueShow/:id" element={<TravelLogueShow trips={mockTrips} />} />
                </Routes>
            </MemoryRouter>
        );
    });

    it('displays to a user a saved trip', () => {
        expect(screen.getByText(/Travelogue: Trip entry/i)).toBeInTheDocument()
    })
});