import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { ButtonProps } from './Button.types';

const baseButtonStyles = ({ theme }: any) => css`
  text-decoration: none;
  border: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: inline-block;
  font-weight: ${theme.font.bold};
  text-align: center;
`;

const sizeStyles = ({ theme, size }: any) => {
  switch (size) {
    case 'small':
      return css`
        font-size: ${theme.font.sizes.xsmall};
        height: 24px;
        line-height: 24px;
        padding: ${theme.spacings.none};
        border-radius: ${theme.border.radius.small};
      `;
    case 'large':
    default:
      return css`
        font-size: ${theme.font.sizes.medium};
        height: 48px;
        line-height: 48px;
        padding: ${theme.spacings.none} ${theme.spacings.large};
        border-radius: ${theme.border.radius.small};
      `;
  }
};

const variantStyles = ({ theme, variant }: any) => {
  switch (variant) {
    case 'primary':
    default:
      return css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.blue};

        &:hover {
          background-color: ${theme.colors.blueDark};
        }
      `;
    case 'secondary':
      return css`
        color: ${theme.colors.blue};
        background-color: ${theme.colors.blueLight};

        &:hover {
          background-color: ${theme.colors.blueMediumLight};
        }
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  ${({ theme }) => baseButtonStyles({ theme })}
  ${({ theme, size }) => size && sizeStyles({ theme, size })}
  ${({ variant, theme }) => variant && variantStyles({ variant, theme })}
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  ${media.lessThan('medium')`
    font-size: 10px;
  `}
`;

export { StyledButton };
