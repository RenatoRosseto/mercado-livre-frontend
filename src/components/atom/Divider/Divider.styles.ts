import styled from 'styled-components';
import { DividerProps } from './Divider.types';

export const StyledDivider = styled.div<DividerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #dedede;
`;
