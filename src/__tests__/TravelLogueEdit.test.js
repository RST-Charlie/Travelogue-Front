import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TravelLogueEdit from '../pages/TravelLogueEdit';

describe('<TravelLogueEdit />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <TravelLogueEdit />
      </BrowserRouter>
    );
  });

  it('has an entry input', () => {
    const entryInput = screen.getByLabelText('Entry');
    expect(entryInput).toBeInTheDocument();
  });
});
