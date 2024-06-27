import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Card from 'components/atom/Card';
import CategoriesList from 'components/atom/CategoriesList';
import Button from 'components/atom/Button';

import { getProductDetailsById } from 'services/productDetailsService';
import { ProductDetails } from 'models/product';
import { formatCurrency } from 'utils/formatCurrency';

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
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const formatSoldQty = (soldQty?: number): string => {
    if (!soldQty) {
      return '';
    }
    if (soldQty === 1) {
      return '| 1 vendido';
    }
    if (soldQty > 1) {
      return `| ${soldQty} vendidos`;
    }
    return '';
  };

  useEffect(() => {
    if (id) {
      getProductDetailsById(id as string)
        .then((response: ProductDetails) => {
          setProduct(response);
        })
        .catch(setError);
    }
  }, [id]);

  if (error) {
    return <div>Erro ao carregar o produto.</div>;
  }

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <ContainerCategories>
        <CategoriesList categories={product.categories ?? []} />
      </ContainerCategories>

      <Card>
        <Container>
          <ProductCard>
            <ImageContainer>
              <Image src={product.picture_url} alt={product.title} />
            </ImageContainer>
            <InfoContainer>
              <SoldText>
                {product.condition} {formatSoldQty(product.sold_qty)}
              </SoldText>
              <ProductTitle>{product.title}</ProductTitle>
              <Price>
                {formatCurrency(
                  Number(`${product.price.amount}.${product.price.decimals}`),
                  product.price.currency,
                )}
              </Price>
              <Button fullWidth>Comprar</Button>
            </InfoContainer>
          </ProductCard>
          <DescriptionContainer>
            <DescriptionTitle>Descrição do produto</DescriptionTitle>
            <DescriptionText>{product.description}</DescriptionText>
          </DescriptionContainer>
        </Container>
      </Card>
    </div>
  );
}

export default Product;
