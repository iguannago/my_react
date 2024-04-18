import { render } from '@testing-library/react';
import Alert1 from './Alert1';

describe('Alert1', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <Alert1
        onClose={() => {
          throw new Error('Not implemented');
        }}
      >
        <h1>Sample Alert</h1>
      </Alert1>
    );
    expect(baseElement).toBeTruthy();
  });

  it('renders children successfully', () => {
    const { container, getByText } = render(
      <Alert1
        onClose={() => {
          throw new Error('Not implemented');
        }}
      >
        <h1>Sample Alert</h1>
      </Alert1>
    );
    const h1Element = container.querySelector('h1');
    expect(h1Element).toBeTruthy();

    expect(getByText(/Sample Alert/)).toBeTruthy();
  });

  it('renders close button successfully', () => {
    const { container } = render(
      <Alert1
        onClose={() => {
          throw new Error('Not implemented');
        }}
      >
        <h1>Sample Alert</h1>
      </Alert1>
    );
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toBeTruthy();
  });

  it('calls onClose when the close button is clicked', () => {
    const onClose = jest.fn();
    const { container } = render(
      <Alert1 onClose={onClose}>
        <h1>Sample Alert</h1>
      </Alert1>
    );
    const buttonElement = container.querySelector('button') as HTMLElement;
    buttonElement.click();
    expect(onClose).toHaveBeenCalled();
  });
});
