// export type ThemeType = 'primary';
// export type VariantType = 'contained';
// export type SizeType = 'lg';
// export type ShapeType = 'straight';

export const mainClassName = 'FashionButton';

export interface ISimpleButtonProps {
  className?: string;
  // theme?: ThemeType;
  // variant?: VariantType;
  // size?: SizeType;
  // shape?: ShapeType;
  block?: boolean;
  disabled?: boolean;
  convex?: boolean;
  loading?: boolean;
  onClick?: (e: MouseEvent) => void;
}

export const mergeProps = (defaultProps: ISimpleButtonProps, props: ISimpleButtonProps) => ({
  ...defaultProps,
  ...props
});