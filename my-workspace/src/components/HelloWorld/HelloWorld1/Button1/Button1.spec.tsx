// Button1.test.js
import { render } from '@testing-library/react';
import Button1 from './Button1';

describe('Button1', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <Button1
        buttonTitle="Click Me"
        buttonClass="my-button"
        onClick={() => {
          throw new Error('Not implemented');
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('displays the button title', () => {
    const { getByText } = render(
      <Button1
        buttonTitle="Click Me"
        buttonClass="my-button"
        onClick={() => {
          throw new Error('Not implemented');
        }}
      />
    );
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.className).toBe('my-button');
  });

  it('calls onClick when the button is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button1
        buttonTitle="Click Me"
        buttonClass="my-button"
        onClick={onClick}
      />
    );
    const buttonElement = getByText('Click Me');
    buttonElement.click();
    expect(onClick).toHaveBeenCalled();
  });
});
