import { render } from '@testing-library/react';
import HelloWorld1 from './HelloWorld1';
describe('HelloWorld1', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <HelloWorld1 alertMessage={'This is an important message.'} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('renders alert message successfully', () => {
    const { container, getByText } = render(
      <HelloWorld1 alertMessage={'This is an important message.'} />
    );
    const strongElement = container.querySelector('strong');
    expect(strongElement).toBeTruthy();

    expect(getByText(/Warning!/)).toBeTruthy();
    expect(getByText(/This is an important message./)).toBeTruthy();
  });

  it('renders button component successfully', () => {
    const { container } = render(
      <HelloWorld1 alertMessage={'This is an important message.'} />
    );
    const buttonElement = container.querySelector('h1');
    expect(buttonElement).toBeTruthy();
  });
  
});
