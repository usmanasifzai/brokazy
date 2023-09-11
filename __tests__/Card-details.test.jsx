import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CardDetails from '../src/screens/card-details/card-details';
import SuccessModal from '../src/components/success-modal/success-modal';
import Home from '../src/screens/Home/Home';
jest.useFakeTimers();

const mockNavigation = {
  navigate: jest.fn(),
};

let modalVisible = false;

const setIsModalVisible = () => {
  modalVisible = true;
};

describe('CardDetails component', () => {
  it('renders the CardDetails component', () => {
    const {getByText} = render(<CardDetails navigation={mockNavigation} />);

    expect(getByText('CARD DETAILS')).toBeTruthy();
  });

  it('displays success modal when Continue button is pressed and navigate and home when success modal button is clicked', async () => {
    const {getByTestId, queryByText} = render(
      <>
        <CardDetails navigation={mockNavigation} />
        <SuccessModal
          closeModal={setIsModalVisible}
          modalVisible={modalVisible}
          navigation={mockNavigation}
        />
      </>,
    );

    expect(queryByText('SUCCESS!')).toBeNull();
    fireEvent.press(getByTestId('continue'));

    const btn = getByTestId('button');
    expect(btn).toBeTruthy();

    setIsModalVisible();

    expect(queryByText('SUCCESS!')).toBeTruthy();
    fireEvent.press(btn);
    expect(mockNavigation.navigate).toHaveBeenCalledWith(Home);
  });
});
