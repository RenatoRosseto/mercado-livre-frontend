import styled from 'styled-components';

export const ProductCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) => theme.spacings.medium};
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rem;
  min-width: 18rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: ${({ theme }) => theme.spacings.xxlarge};
`;

export const Price = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
`;

export const FreeShippingIcon = styled.img`
  margin-left: 0.8rem;
`;
