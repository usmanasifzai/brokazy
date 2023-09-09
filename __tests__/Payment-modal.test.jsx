import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomModal from '../src/components/payment-modal/payment-modal';
jest.useFakeTimers();

describe('CustomModal component', () => {
  it('displays modal content and navigates when a payment option is selected', () => {
    const setModal = jest.fn();
    const navigate = jest.fn();

    // Render the CustomModal component
    const {getByText, getByTestId} = render(
      <CustomModal modal={true} setModal={setModal} navigation={{navigate}} />,
    );

    expect(getByText('Credit/Debit Card')).toBeTruthy();
    expect(getByText('PayPal')).toBeTruthy();
    expect(getByText('Cancel')).toBeTruthy();

    const creditCardOption = getByText('Credit/Debit Card');
    fireEvent.press(creditCardOption);

    expect(setModal).toHaveBeenCalledWith(false);
    expect(navigate).toHaveBeenCalledWith('CardDetails');

    const payPalOption = getByText('PayPal');
    fireEvent.press(payPalOption);

    expect(setModal).toHaveBeenCalledWith(false);
    expect(navigate).toHaveBeenCalledWith('CardDetails');

    const cancelButton = getByText('Cancel');
    fireEvent.press(cancelButton);

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
