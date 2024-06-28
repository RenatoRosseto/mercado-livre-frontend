import { StyledDivider } from './Divider.styles';
import { DividerProps } from './Divider.types';

const Divider = ({ width, height }: DividerProps) => (
  <StyledDivider width={width} height={height} />
);

Divider.defaultProps = {
  width: '100%',
  height: '1px',
};

export default Divider;
