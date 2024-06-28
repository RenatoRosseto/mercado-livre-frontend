import { render } from 'utils/test-utils';
import '@testing-library/jest-dom';

import AppContext from 'context/AppContext';

import Header from './Header';

describe('Header Component', () => {
  test('Renders the Header component with logo and Input Search', () => {
    const { getByTestId } = render(
      <AppContext.Provider value={{}}>
        <Header />
      </AppContext.Provider>,
    );

    const logo = getByTestId('logo');

    expect(logo).toBeInTheDocument();
  });
});
