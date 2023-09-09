import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DrawerRow from '../src/components/drawer-row/drawer-row';
jest.useFakeTimers();

describe('DrawerRow component', () => {
  jest.useFakeTimers();
  it('renders correctly', () => {
    const {getByText} = render(<DrawerRow name="user" text="My Profile" />);
    const textElement = getByText('My Profile');
    expect(textElement).toBeDefined();
  });

  it('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    const {getByText} = render(
      <DrawerRow name="user" text="My Profile" onClick={onClickMock} />,
    );
    const rowElement = getByText('My Profile');
    fireEvent.press(rowElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders a switch when name is "notifications"', () => {
    const {getByTestId} = render(
      <DrawerRow name="notifications" text="Notification" />,
    );
    const switchElement = getByTestId('switch');
    expect(switchElement).toBeDefined();
  });

  it('toggles switch when clicked', () => {
    const {getByTestId} = render(
      <DrawerRow name="notifications" text="Notification" />,
    );
    const switchElement = getByTestId('switch');

    fireEvent(switchElement, 'valueChange', true);

    expect(switchElement.props.value).toBe(true);
  });
});
