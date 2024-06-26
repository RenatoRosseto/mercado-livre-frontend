import React from 'react';
import styled from 'styled-components';

import Card from 'components/atom/Card';
import CategoriesList from 'components/atom/CategoriesList';
import Button from 'components/atom/Button';

const ContainerCategories = styled.div`
  margin: ${({ theme }) => `${theme.spacings.medium} ${theme.spacings.none}`};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacings.xxlarge};
`;

const ProductCard = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SoldText = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const ProductTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: ${({ theme }) => theme.spacings.medium};
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.huge};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: ${({ theme }) => `${theme.spacings.xxlarge} ${theme.spacings.none}`};
`;

const DescriptionContainer = styled.div`
  width: 100%;
`;

const DescriptionTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.font.bold};
  margin-bottom: ${({ theme }) => theme.spacings.xxlarge};
`;

const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 68rem;
`;

function Product() {
  return (
    <div className="container">
      <ContainerCategories>
        <CategoriesList categories={['bla', 'ble', 'bli']} />
      </ContainerCategories>

      <Card>
        <Container>
          <ProductCard>
            <ImageContainer>
              <Image
                src="http://http2.mlstatic.com/D_864844-MLM51559388062_092022-O.jpg"
                alt="Product Image"
              />
            </ImageContainer>
            <InfoContainer>
              <SoldText>Novo - 234 vendidos</SoldText>
              <ProductTitle>Deco Reverse</ProductTitle>
              <Price>R$ 1980</Price>
              <Button>Comprar</Button>
            </InfoContainer>
          </ProductCard>
          <DescriptionContainer>
            <DescriptionTitle>Descrição do produto</DescriptionTitle>
            <DescriptionText>Desc...</DescriptionText>
          </DescriptionContainer>
        </Container>
      </Card>
    </div>
  );
}

export default Product;
