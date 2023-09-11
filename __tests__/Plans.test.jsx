import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Plans from '../src/screens/plans/Plans';
import PlanModal from '../src/components/plan-modal/plan-modal';
jest.useFakeTimers();

const mockNavigation = {
  navigate: jest.fn(),
};

let isVisible = false;

const setIsVisible = () => {
  isVisible = true;
};

describe('Plans component', () => {
  it('displays premium plan details and activates/update plan button', () => {
    const {getByText, getByTestId} = render(
      <>
        <Plans navigation={mockNavigation} />
        <PlanModal
          setModalVisible={setIsVisible}
          modalVisible={isVisible}
          planDetails={{}}
          navigation={mockNavigation}
        />
      </>,
    );

    expect(getByText('Subscriptions Plans')).toBeTruthy();

    expect(getByText('PREMIUM PLAN')).toBeTruthy();
    expect(getByText('54 Days Left')).toBeTruthy();
    expect(getByText('May 22, 2022')).toBeTruthy();

    const activateUpdateButton = getByText('ACTIVATE/UPDATE PLAN');
    expect(activateUpdateButton).toBeTruthy();
    expect(activateUpdateButton).toBeDisabled();

    const planCard = getByTestId('plan-card0');
    fireEvent.press(planCard);
    setIsVisible();

    const subBtn = getByTestId('subscribe');
    fireEvent.press(subBtn);

    fireEvent.press(activateUpdateButton);

    expect(activateUpdateButton).not.toBeDisabled();
  });
});
