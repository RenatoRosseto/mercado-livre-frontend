import { render } from 'utils/test-utils';

import Divider from './';

describe('Divider component', () => {
  it('renders with default props', () => {
    const { container } = render(<Divider />);
    const divider = container.firstChild;
    expect(divider).toHaveStyle('width: 100%');
    expect(divider).toHaveStyle('height: 1px');
    expect(divider).toHaveStyle('background-color: #dedede');
  });

  it('renders with given width and height', () => {
    const { container } = render(<Divider width="50%" height="2px" />);
    const divider = container.firstChild;
    expect(divider).toHaveStyle('width: 50%');
    expect(divider).toHaveStyle('height: 2px');
    expect(divider).toHaveStyle('background-color: #dedede');
  });
});
