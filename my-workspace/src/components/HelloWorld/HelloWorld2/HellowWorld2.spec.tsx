import { render } from '@testing-library/react';
import HelloWorld2 from './HelloWorld2';

describe('HelloWorld2', () => {
  it('renders successfully', () => {
    const { baseElement, getByText } = render(
      <HelloWorld2 alertMessage={'This is an important message.'} />
    );
    expect(baseElement).toBeTruthy();
    expect(getByText(/This is an important message./)).toBeTruthy();
  });
});
