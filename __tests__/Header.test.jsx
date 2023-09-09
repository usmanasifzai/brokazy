import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Header from '../src/components/header/header';
jest.useFakeTimers();

let isVisible = false;

const setIsVisible = () => {
  isVisible = true;
};

test('Header component renders correctly', () => {
  const {getByText, getByPlaceholderText, getByTestId} = render(
    <Header setIsVisible={setIsVisible} isVisible={isVisible} />,
  );

  // Assert that the component renders correctly
  const searchInput = getByPlaceholderText('Search');
  expect(searchInput).toBeTruthy();

  const avatar = getByTestId('avatar');
  expect(avatar).toBeTruthy();
  expect(isVisible).toBe(false);

  const brokazyText = getByText('Brokazy');
  expect(brokazyText).toBeTruthy();
});

test('Clicking on the avatar toggles visibility', () => {
  const {getByTestId} = render(
    <Header setIsVisible={setIsVisible} isVisible={isVisible} />,
  );
  const avatar = getByTestId('avatar');

  fireEvent.press(avatar);
  expect(isVisible).toBe(true);
});
