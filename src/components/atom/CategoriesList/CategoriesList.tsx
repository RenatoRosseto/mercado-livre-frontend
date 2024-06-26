import React from 'react';

import { CategoriesListProps } from './CategoriesList.types';
import { StyledParagraph } from './CategoriesList.styles';

const CategoriesList = ({ categories }: CategoriesListProps) => (
  <StyledParagraph>{categories.join(' > ')}</StyledParagraph>
);

export default CategoriesList;
