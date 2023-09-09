import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../src/screens/Home/Home';
jest.useFakeTimers();

const mockNavigation = {
  navigate: jest.fn(),
};

describe('Home component', () => {
  it('renders text', () => {
    const {getByText} = render(<Home navigation={mockNavigation} />);

    let name = getByText('BROKAZY');
    expect(name).toBeTruthy();
  });
});
