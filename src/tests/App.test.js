import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';

xdescribe('App component', () => {
  test('Should be displayed image when the first tab is selected', () => {
    render(<App />);
    const pictureBtn = screen.getByRole('button', { name: 'Picture' });
    const resultImg = screen.getByRole('img');
    expect(pictureBtn).toHaveClass('active');
    expect(resultImg).toBeInTheDocument();
  });

  test('Should be displayed ImageCard component when the first tab is selected', () => {
    render(<App />);
    const calcBtn = screen.getByRole('button', { name: 'Calculations' });
    userEvent.click(calcBtn);

    const calcHeader = screen.getByRole('heading', { name: 'Result' });
    expect(calcBtn).toHaveClass('active');
    expect(calcHeader).toBeInTheDocument();
  });

  test('Should be displayed Calculation component when the second tab is selected', () => {
    render(<App />);
    const calcBtn = screen.getByRole('button', { name: 'Calculations' });
    userEvent.click(calcBtn);

    const calcHeader = screen.getByRole('heading', { name: 'Result' });
    expect(calcBtn).toHaveClass('active');
    expect(calcHeader).toBeInTheDocument();
  });

  test('Should be displayed ButtonGroup component when the third tab is selected', () => {
    render(<App />);
    const groupBtn = screen.getByRole('button', { name: 'Group' });
    userEvent.click(groupBtn);

    const btnsGroup = screen.getByTestId('button-group');
    expect(groupBtn).toHaveClass('active');
    expect(btnsGroup).toBeInTheDocument();
  });
});
