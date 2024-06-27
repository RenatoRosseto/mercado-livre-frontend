import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: ${({ theme }) => theme.font.bold};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

export const HomeLink = styled.a`
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.blueDark};
  text-decoration: underline;
  cursor: pointer;
`;
