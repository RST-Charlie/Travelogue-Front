import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';

describe('<Login />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  it('renders without crashing', () => {
    const emailLabel = screen.getByText(/email/i); 
    expect(emailLabel).toBeInTheDocument();
  });
});
