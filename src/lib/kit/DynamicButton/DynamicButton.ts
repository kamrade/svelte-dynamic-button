export type ButtonType = 'button' | 'submit' | 'reset';

export interface IDButtonProps {
  className?: string;
  theme?: string;
  variant?: string;
  size?: string;
  shape?: string;
  block?: boolean;
  disabled?: boolean;
  convex?: boolean;
  loading?: boolean;
  onClick?: (e: MouseEvent) => void;
  

  type?: ButtonType;
  name?: string;
  value?: string;

  iconButton?: boolean;
}

export const getClassNames = (props: IDButtonProps) => {
  const { theme, variant, size, shape, className, block,convex, loading, iconButton } = props;
  return `DynamicButton ` +
    (convex ? `DynamicButton--convex ` : '') +
    (loading ? `DynamicButton--loading ` : '') +
    `${className} ` +
    `${className}--theme--${theme} ` +
    `${className}--variant--${variant} ` +
    `${className}--size--${size} ` +
    `${className}--shape--${shape} ` +
    (iconButton ? `DynamicButton--icon` : '') +
    (block ? `DynamicButton--block ` : '');
}