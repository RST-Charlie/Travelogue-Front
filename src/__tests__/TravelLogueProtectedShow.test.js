import React from 'react' 
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import TravelLogueProtectedShow from '../pages/TravelLogueProtectedShow';
import mockTrips from '../mockTrips';
import { Button, Card } from 'reactstrap';

describe('<TravelLogueProtectedShow />', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/TravelLogueProtectedShow/1"]}>
                <Routes>
                    <Route path="/TravelLogueShow/:id" element={<TravelLogueProtectedShow trips={mockTrips} />} />
                </Routes>
            </MemoryRouter>
        );
    });

    it('displays to a user a saved trip', () => {
        expect(screen.getByText(/Travelogue:/i)).toBeInTheDocument()
    })
});