import React from 'react';

import { StyledHeader, StyledHeaderContainer, Logo } from './Header.styles';
import InputSearch from 'components/molecule/InputSearch';

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <StyledHeaderContainer>
          <Logo data-testid="logo" href="/">
            Mercado Livre Brasil - Onde comprar e vender de Tudo
          </Logo>

          <InputSearch />
        </StyledHeaderContainer>
      </div>
    </StyledHeader>
  );
};

export default Header;
