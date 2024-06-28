import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const headerStyles = ({ theme }: any) => css`
  background-color: ${theme.colors.yellowBg};
  padding: 8px 10px 12px 10px;
`;

export const StyledHeader = styled.header`
  ${({ theme }) => headerStyles({ theme })}
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.large};
`;

export const Logo = styled.a`
  background-image: url(/images/logo-header.png);
  background-repeat: no-repeat;
  height: 3.4rem;
  width: 15rem;
  text-indent: -9999px;
  overflow: hidden;
  display: block;

  ${media.lessThan('medium')`
    display: none;
  `}
`;
