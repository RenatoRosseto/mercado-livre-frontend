import { render, screen } from 'utils/test-utils';

import ProductNotFound from './';

describe('ProductNotFound Component', () => {
  it('renders the title', () => {
    render(<ProductNotFound />);
    const titleElement = screen.getByText('Produto não encontrado');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the message', () => {
    render(<ProductNotFound />);
    const messageElement = screen.getByText(
      'Não foi possível encontrar o produto desejado.',
    );
    expect(messageElement).toBeInTheDocument();
  });

  it('renders the link to home', () => {
    render(<ProductNotFound />);
    const linkElement = screen.getByText('Retornar à página inicial');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
