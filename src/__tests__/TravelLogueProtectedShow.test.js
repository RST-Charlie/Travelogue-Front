import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import TravelLogueProtectedShow from '../pages/TravelLogueProtectedShow';
import mockTrips from '../mockTrips';

describe('<TravelLogueProtectedShow />', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/TravelLogueProtectedShow/1"]}>
                <Routes>
                    <Route path="/TravelLogueProtectedShow/:id" element={<TravelLogueProtectedShow trips={mockTrips} />} />
                </Routes>
            </MemoryRouter>
        );
    });

    it('displays Edit travelogue', () => {
        expect(screen.getByText((content, element) => {
            const hasText = (node) => node.textContent === 'Travelogue:';
            const elementHasText = hasText(element);
            const childrenDontHaveText = Array.from(element.children).every(
                (child) => !hasText(child)
            );

            return elementHasText && childrenDontHaveText;
        })).toBeInTheDocument();
    });
});
