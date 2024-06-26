import React from 'react';

import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styles';

const Button = ({
  variant = 'primary',
  size = 'large',
  fullWidth = false,
  ariaLabel,
  onClick,
  children,
  buttonLink,
}: ButtonProps) => {
  const buttonClickHandler = () => {
    if (buttonLink) {
      window.open(buttonLink, '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  const ButtonElement = buttonLink ? 'a' : 'button';

  return (
    <StyledButton
      as={ButtonElement}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      aria-label={ariaLabel}
      onClick={buttonClickHandler}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
