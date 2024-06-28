import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Image from 'next/image';

import { SearchResultProps } from './InputSearch.types';
import {
  InputSearchContainer,
  Input,
  VerticalDivider,
  SearchButton,
  SearchResultsContainer,
  SearchResultItem,
  RemoveButton,
} from './InputSearch.styles';
import AppContext from 'context/AppContext';

const InputSearch = () => {
  const router = useRouter();

  const { setSearchTerm } = useContext(AppContext);

  const [searchResults, setSearchResults] = useState<SearchResultProps[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [auxSearchTerm, setAuxSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuxSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (auxSearchTerm) {
      const newSearchResults = [
        { id: Date.now().toString(), term: auxSearchTerm },
        ...searchResults,
      ];

      Cookies.set('searchTerms', JSON.stringify(newSearchResults));

      setSearchResults(newSearchResults);
      setAuxSearchTerm('');

      setSearchTerm(auxSearchTerm);
      router.push('/products');
    }
  };

  const handleRemoveSearchTerm = (id: string) => {
    const updatedSearchResults = searchResults.filter(
      (result) => result.id !== id,
    );

    Cookies.set('searchTerms', JSON.stringify(updatedSearchResults));

    setSearchResults(updatedSearchResults);
  };

  const handleKeyDown = (event: {
    keyCode: number;
    preventDefault: () => void;
  }) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    const storedSearchTerms = Cookies.get('searchTerms');
    if (storedSearchTerms) {
      const parsedSearchTerms = JSON.parse(
        storedSearchTerms,
      ) as SearchResultProps[];
      setSearchResults(parsedSearchTerms);
    }
  }, []);

  return (
    <InputSearchContainer>
      <Input
        type="text"
        placeholder="Buscar produtos, marcas e muito mais..."
        value={auxSearchTerm}
        onChange={handleInputChange}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 100)}
        onKeyDown={handleKeyDown}
      />
      <VerticalDivider />
      <SearchButton onClick={handleSearch}>
        <Image
          src="/images/icons/icon-search.svg"
          alt="image search item"
          width={30}
          height={30}
        />
      </SearchButton>
      {showResults && searchResults.length > 0 && (
        <SearchResultsContainer>
          {searchResults.map((result) => (
            <SearchResultItem key={result.id}>
              {result.term}
              <RemoveButton onClick={() => handleRemoveSearchTerm(result.id)}>
                <Image
                  src="/images/icons/icon-remove.svg"
                  alt="image remove item"
                  width={24}
                  height={24}
                />
              </RemoveButton>
            </SearchResultItem>
          ))}
        </SearchResultsContainer>
      )}
    </InputSearchContainer>
  );
};

export default InputSearch;
