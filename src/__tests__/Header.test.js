import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Header from '../components/Header';

describe('Header', () => {
  it('renders the navbar with the correct text', () => {
    const { getByText } = render(
      <BrowserRouter> 
        <Header />
      </BrowserRouter>
    );
    const homeLink = getByText(/RSTech/i);
    expect(homeLink).toBeInTheDocument();
  });
});
