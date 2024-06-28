import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import media from 'styled-media-query';

import AppContext from 'context/AppContext';
import ProductItem from 'components/molecule/ProductItem';
import { Product } from 'models/product';
import { ProductsSearch } from 'models/productsSearch';
import { getProductsSearchByQuery } from 'services/productsSearchService';
import Card from 'components/atom/Card';
import CategoriesList from 'components/atom/CategoriesList';
import Divider from 'components/atom/Divider';
import ProductNotFound from 'components/atom/ProductNotFound';

const Container = styled.div`
  ${media.lessThan('medium')`
    padding: ${({ theme }) => `${theme.spacings.small}`};
  `}
`;

const ContainerCategories = styled.div`
  margin: ${({ theme }) => `${theme.spacings.medium} ${theme.spacings.none}`};
`;

const ContainerDivider = styled.div`
  margin: ${({ theme }) => `${theme.spacings.medium}`};
`;

function Products() {
  const { searchTerm } = useContext(AppContext);
  const [productsSearch, setProductsSearch] = useState<ProductsSearch | null>(
    null,
  );
  const [error, setError] = useState<Error | null>(null);
  const storedSearchTerms = Cookies.get('searchTerms');

  const getProductsSearch = (query: string) => {
    getProductsSearchByQuery(query)
      .then((response: ProductsSearch) => {
        setProductsSearch(response);
      })
      .catch(setError);
  };

  useEffect(() => {
    if (searchTerm) {
      getProductsSearch(searchTerm);
    } else if (storedSearchTerms) {
      const parsedSearchTerms = JSON.parse(storedSearchTerms);
      getProductsSearch(parsedSearchTerms[0]?.term);
    } else {
      getProductsSearch('iphone 12');
    }
  }, [searchTerm, storedSearchTerms]);

  if (error) {
    return <ProductNotFound />;
  }

  if (!productsSearch) {
    return <div>Carregando...</div>;
  }

  return (
    <Container className="container">
      <ContainerCategories>
        <CategoriesList categories={productsSearch.categories ?? []} />
      </ContainerCategories>

      <Card>
        {productsSearch.products.map((product: Product) => (
          <React.Fragment key={product.id}>
            <ProductItem {...product} />
            <ContainerDivider>
              <Divider />
            </ContainerDivider>
          </React.Fragment>
        ))}
      </Card>
    </Container>
  );
}

export default Products;
