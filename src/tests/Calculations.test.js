import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculations from '../components/Calculations';

describe('Calculations component', () => {
  test('Check if evaluation of the result is correct', () => {
    render(<Calculations />);

    const result = screen.getByRole('heading', { level: 4 });
    const firstInput = screen.getByRole('spinbutton', { name: 'first number' });
    const secondInput = screen.getByRole('spinbutton', {
      name: 'second number',
    });
    const plusBtn = screen.getByTestId('+');
    const minusBtn = screen.getByTestId('-');
    const evaluateBtn = screen.getByText('Evaluate');

    userEvent.type(firstInput, '5');
    userEvent.click(plusBtn);
    userEvent.type(secondInput, '2');
    userEvent.click(evaluateBtn);
    expect(result).toHaveTextContent('7');

    userEvent.type(firstInput, '8');
    userEvent.click(minusBtn);
    userEvent.type(secondInput, '2');
    userEvent.click(evaluateBtn);
    expect(result).toHaveTextContent('6');
  });
});
