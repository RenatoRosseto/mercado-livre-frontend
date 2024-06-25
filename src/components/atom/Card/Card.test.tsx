import { render } from 'utils/test-utils';
import '@testing-library/jest-dom';

import Card from '.';

describe('Card Component', () => {
  test('Renders the Card component with children', () => {
    const { getByText } = render(
      <Card>
        <div>Content inside the card</div>
      </Card>,
    );

    const content = getByText('Content inside the card');
    expect(content).toBeInTheDocument();
  });

  test('Applies correct styles to the Card component', () => {
    const { container } = render(
      <Card>
        <div>Content inside the card</div>
      </Card>,
    );

    const cardElement = container.firstChild;

    expect(cardElement).toHaveStyle('box-shadow: 0 1px 2px 0 rgba(0,0,0,0.12)');
    expect(cardElement).toHaveStyle('background-color: #fff');
    expect(cardElement).toHaveStyle('border-radius: 0.6rem');
  });
});
