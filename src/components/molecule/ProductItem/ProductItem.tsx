import React from 'react';

import {
  ProductCard,
  ImageContainer,
  Image,
  InfoContainer,
  ProductTitle,
  Price,
  FreeShippingIcon,
} from './ProductItem.styles';

import { Product } from 'models/product';
import { formatCurrency } from 'utils/formatCurrency';

const ProductItem: React.FC<Product> = (product: Product) => {
  return (
    <ProductCard onClick={() => console.log(product.id)}>
      <ImageContainer>
        <Image src={product.picture_url} alt={product.title} />
      </ImageContainer>
      <InfoContainer>
        <Price>
          {formatCurrency(
            Number(`${product.price.amount}.${product.price.decimals}`),
            product.price.currency,
          )}
          {product.free_shipping && (
            <FreeShippingIcon
              src="/images/icons/icon-free-shipping.png"
              alt="Ícone de caminhão indicando frete grátis"
            />
          )}
        </Price>
        <ProductTitle>{product.title}</ProductTitle>
      </InfoContainer>
    </ProductCard>
  );
};

export default ProductItem;
