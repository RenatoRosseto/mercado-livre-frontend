import styled from 'styled-components';

export const InputSearchContainer = styled.div`
  position: relative;
  min-width: 36.5rem;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  margin: ${({ theme }) => theme.spacings.none};
  border-radius: ${({ theme }) => theme.border.radius.xxsmall};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  height: 4rem;
  width: 100%;
  padding: 10px 60px 10px 15px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1.5px;
  outline: none;

  &:focus {
    border-color: transparent;
  }
`;

export const VerticalDivider = styled.div`
  height: 2.6rem;
  border-left: 0.1rem solid #e6e6e6;
  position: absolute;
  top: 0.8rem;
  right: 4rem;
  z-index: 1;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-color: transparent;
  cursor: pointer;
`;

export const SearchResultsContainer = styled.div`
  position: absolute;
  top: 4.5rem;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid #ccc;
  max-height: 15rem;
  overflow-y: auto;
  z-index: 1;
`;

export const SearchResultItem = styled.div`
  padding: ${({ theme }) => theme.spacings.small};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const RemoveButton = styled.button`
  margin-left: ${({ theme }) => theme.spacings.small};
  cursor: pointer;
  display: flex;
`;
