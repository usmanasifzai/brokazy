import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DrawerNavigation from '../src/navigation/DrawerNavigator';
import {PLAN} from '../src/constants/navigation';
jest.useFakeTimers();

const mockNavigation = {
  navigate: jest.fn(),
};

let isVisible = true;

const setIsVisible = () => {
  isVisible = false;
};

test('Opens and closes the modal', () => {
  const {getByText, queryByText, getByTestId} = render(
    <DrawerNavigation
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      navigation={mockNavigation}
    />,
  );

  const avatar = getByTestId('avatar1');
  let name = getByText('Shawn Pope');
  expect(avatar).toBeTruthy();
  expect(name).toBeTruthy();

  expect(isVisible).toBe(true);
  fireEvent.press(avatar);
  expect(isVisible).toBe(false);
});

test('Navigates to the Plan screen when "Subscription Plan" is clicked', () => {
  const {getByText} = render(
    <DrawerNavigation
      isVisible={true}
      setIsVisible={setIsVisible}
      navigation={mockNavigation}
    />,
  );

  fireEvent.press(getByText('Subscription Plan'));

  expect(mockNavigation.navigate).toHaveBeenCalledWith(PLAN);
});
