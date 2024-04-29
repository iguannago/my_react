import { render } from '@testing-library/react';
import HelloWorld2 from './HelloWorld2';

describe('HelloWorld2', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <HelloWorld2 alertMessage={'This is an important message.'} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('renders alert message successfully', () => {
    const { getByText } = render(
      <HelloWorld2 alertMessage={'This is an important message.'} />
    );
    expect(getByText(/This is an important message./)).toBeTruthy();
  });

  it('renders button component successfully', () => {
    const { container, getByText } = render(
      <HelloWorld2 alertMessage={'This is an important message.'} />
    );
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toBeTruthy();
    expect(getByText('Click me!')).toBeTruthy();
  });
});
