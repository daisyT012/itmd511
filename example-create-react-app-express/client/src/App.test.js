import { fireEvent, getByLabelText, getByTestId, getByText, render, screen } from '@testing-library/react';
import React from 'react';
import Tips from './components/Tips';
import Submit from './components/Submit';
import { toggleNav } from './Navigation.action';
import { TOGGLE_NAV } from './Navigation.constants';
import NavBarReducer from './Navigation.reducer';


it('renders clarify link', () => {
  render(<Tips />);
  const linkElement = screen.getByText(/Click here! Clarify is ready for registration at Illinois Tech/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders button', () => {
 render(<Submit />);
  const buttonElement = screen.getByText(/Submit/i);
  expect(buttonElement).toBeInTheDocument();
});

it('renders input textbox', () => {
  render(<Submit />)
  const input = screen.getByPlaceholderText('tips');
  expect(input).toBeInTheDocument();
})

describe('Navigation actions', () => {
  describe('toggleNav', () => {
    it('should return the correct constant', () => {
      expect(toggleNav()).toEqual({
        type: TOGGLE_NAV
      });
    });
  });
});

describe('NavBarReducer', () => {
  it('returns the initial state', () => {
    expect(NavBarReducer(undefined, {})).toEqual({
      open: false
    });
  });

  it('handles the toggleNav action', () => {
    expect(NavBarReducer(undefined, toggleNav())).toEqual({
      open: true
    })
  });
});
