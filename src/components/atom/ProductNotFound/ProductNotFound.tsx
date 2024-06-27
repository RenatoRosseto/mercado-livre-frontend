import React from 'react';
import Link from 'next/link';

import { Container, Title, Message, HomeLink } from './ProductNotFound.styles';

const ProductNotFound = () => (
  <Container>
    <Title>Produto não encontrado</Title>
    <Message>Não foi possível encontrar o produto desejado.</Message>
    <Link href="/" passHref>
      <HomeLink>Retornar à página inicial</HomeLink>
    </Link>
  </Container>
);

export default ProductNotFound;
