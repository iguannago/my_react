import { render, fireEvent } from '@testing-library/react';
import HelloWorld1 from './HelloWorld1';
describe('HelloWorld1', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <HelloWorld1 alertMessage={'This is an important message.'} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('renders alert message successfully when showAlert is false', () => {
    const { container, queryByText } = render(
      <HelloWorld1 alertMessage={'This is an important message.'} />
    );
    const strongElement = container.querySelector('strong');
    expect(strongElement).toBeFalsy();

    expect(queryByText(/This is an important message/)).toBeFalsy();
    expect(queryByText(/Warning!/)).toBeFalsy();
  });

  it('renders button component successfully', () => {
    const { container } = render(
      <HelloWorld1 alertMessage={'This is an important message.'} />
    );
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toBeTruthy();
  });

  it('renders alert message successfully when showAlert is true', () => {
    const alertMessage = 'This is a warning!';
    const { getByText, queryByText } = render(
      <HelloWorld1 alertMessage={alertMessage} />
    );
    expect(queryByText('Warning!')).toBeNull();

    fireEvent.click(getByText('Warning'));

    expect(queryByText(alertMessage)).toBeTruthy();
    expect(queryByText(/Warning!/)).toBeTruthy();
  });
});
