import { CardProps } from './Card.types';
import { CardWrapper } from './Card.styles';

const Card = ({ children, id }: CardProps) => {
  return <CardWrapper id={id}>{children}</CardWrapper>;
};

export default Card;
