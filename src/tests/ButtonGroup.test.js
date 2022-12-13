import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonGroup from '../components/ButtonGroup';

xdescribe('ButtonGroup component', () => {
  test('Text alignment in the paragraph is left', () => {
    render(<ButtonGroup />);
    const leftBtn = screen.getByRole('radio', {
      name: 'left',
    });
    userEvent.click(leftBtn);
    const text = screen.getByTestId('text');
    expect(text).toHaveAttribute('align', 'left');
  });

  test('Text alignment in the paragraph is center', () => {
    render(<ButtonGroup />);
    const centerBtn = screen.getByRole('radio', {
      name: 'center',
    });
    userEvent.click(centerBtn);
    const text = screen.getByTestId('text');
    expect(text).toHaveAttribute('align', 'center');
  });

  test('Text alignment in the paragraph is right', () => {
    render(<ButtonGroup />);
    const rightBtn = screen.getByRole('radio', {
      name: 'right',
    });
    userEvent.click(rightBtn);
    const text = screen.getByTestId('text');
    expect(text).toHaveAttribute('align', 'right');
  });
});
