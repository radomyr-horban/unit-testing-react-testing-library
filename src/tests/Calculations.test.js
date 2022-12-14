import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculations from '../components/Calculations';

describe('Calculations component', () => {
  test('Check if evaluation of the result is correct with "-" option', () => {
    render(<Calculations />);

    const firstInput = screen.getByRole('spinbutton', { name: 'first number' });
    userEvent.type(firstInput, '5');
    const secondInput = screen.getByRole('spinbutton', {
      name: 'second number',
    });
    userEvent.type(secondInput, '2');

    const minusBtn = screen.getByText('-');
    userEvent.click(minusBtn);

    const evaluateBtn = screen.getByText('Evaluate');
    userEvent.click(evaluateBtn);

    const result = screen.getByRole('heading', { level: 4 });
    expect(result).toHaveTextContent('3');
  });

  test('Check if evaluation of the result is correct with "additional" option', () => {
    render(<Calculations />);

    const firstInput = screen.getByRole('spinbutton', { name: 'first number' });
    userEvent.type(firstInput, '8');

    const secondInput = screen.getByRole('spinbutton', {
      name: 'second number',
    });
    userEvent.type(secondInput, '2');

    const evaluateBtn = screen.getByText('Evaluate');
    userEvent.click(evaluateBtn);

    const result = screen.getByRole('heading', { level: 4 });
    expect(result).toHaveTextContent('10');
  });
});
