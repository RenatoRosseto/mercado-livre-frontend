import styled, { css } from 'styled-components';

const cardStyles = ({ theme }: any) => css`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  background-color: ${theme.colors.white};
  border-radius: ${theme.border.radius.small};
`;

export const CardWrapper = styled.div`
  ${({ theme }) => cardStyles({ theme })}
`;
