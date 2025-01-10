import React from 'react';
import { render, screen } from '@testing-library/react';
import { PriceComparison } from '../PriceComparison';

describe('PriceComparison', () => {
  it('renders without crashing', () => {
    render(<PriceComparison />);
    expect(screen.getByText('Fuel Your Savings - Compare Prices Now!')).toBeInTheDocument();
  });

  it('displays correct number of price cards', () => {
    render(<PriceComparison />);
    const priceCards = screen.getAllByRole('button', { name: /91|X 95|D/i });
    expect(priceCards).toHaveLength(6);
  });

  it('renders search form', () => {
    render(<PriceComparison />);
    expect(screen.getByPlaceholderText('Enter address')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });
});