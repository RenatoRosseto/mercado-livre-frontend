type ButtonSize = 'small' | 'large';
type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
  buttonLink?: string;
  children: string;
}
