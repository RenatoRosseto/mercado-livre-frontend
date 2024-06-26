import { render } from 'utils/test-utils';
import 'jest-styled-components';

import CategoriesList from './';

describe('CategoriesList component', () => {
  test('should render the strings joined by " > "', () => {
    const strings = ['bla', 'ble', 'bli'];
    const { getByText } = render(<CategoriesList categories={strings} />);
    expect(getByText('bla > ble > bli')).toBeInTheDocument();
  });

  test('should apply the correct style', () => {
    const strings = ['bla', 'ble', 'bli'];
    const { getByText } = render(<CategoriesList categories={strings} />);
    const paragraph = getByText('bla > ble > bli');
    expect(paragraph).toHaveStyleRule('color', '#999999');
  });
});
