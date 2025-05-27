import { type IDButtonProps } from '../../kit/DynamicButton/DynamicButton.js';

export type ThemeType = 'primary' | 'secondary';
export type VariantType = 'contained' | 'outlined';
export type SizeType = 'sm' | 'lg' | 'xl';
export type ShapeType = 'straight' | 'rounded';

export const mainClassName = 'SimpleButton';

export interface ISimpleButtonProps extends IDButtonProps {
  className?: string;
  theme?: ThemeType;
  variant?: VariantType;
  size?: SizeType;
  shape?: ShapeType;
  block?: boolean;
  disabled?: boolean;
  convex?: boolean;
  loading?: boolean;
  onClick?: (e: MouseEvent) => void;

  iconButton?: boolean;
}

export const mergeProps = (defaultProps: ISimpleButtonProps, props: ISimpleButtonProps) => ({
  ...defaultProps,
  ...props
});