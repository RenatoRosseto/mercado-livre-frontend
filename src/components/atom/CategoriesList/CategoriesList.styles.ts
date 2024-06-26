import styled from 'styled-components';

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.font.light};
`;
