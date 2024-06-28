import React from 'react';
import styled from 'styled-components';

import ProductItem from 'components/molecule/ProductItem';
import { Product } from 'models/product';
import Card from 'components/atom/Card';
import CategoriesList from 'components/atom/CategoriesList';

const ContainerCategories = styled.div`
  margin: ${({ theme }) => `${theme.spacings.medium} ${theme.spacings.none}`};
`;

function Products() {
  const categories = ['bla', 'ble'];
  const products: Product[] = [
    {
      id: 'MLB4381812076',
      title: 'Apple iPhone 13 (128 Gb) Meia-noite - Distribuidor Autorizado',
      price: {
        currency: 'BRL',
        amount: 3976,
        decimals: 70,
      },
      picture_url:
        'http://http2.mlstatic.com/D_790522-MLA47782243619_102021-I.jpg',
      condition: 'new',
      free_shipping: true,
    },
    {
      id: 'MLB4410983832',
      title: 'Apple iPhone 15 (128 Gb) - Rosa - Distribuidor Autorizado',
      price: {
        currency: 'BRL',
        amount: 5332,
        decimals: 20,
      },
      picture_url:
        'http://http2.mlstatic.com/D_958009-MLA71782868134_092023-I.jpg',
      condition: 'new',
      free_shipping: true,
    },
  ];
  return (
    <div className="container">
      <ContainerCategories>
        <CategoriesList categories={categories ?? []} />
      </ContainerCategories>

      <Card>
        {products.map((product: Product) => (
          // eslint-disable-next-line react/jsx-key
          <ProductItem {...product} />
        ))}
      </Card>
    </div>
  );
}

export default Products;
