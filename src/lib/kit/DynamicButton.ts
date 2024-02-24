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
}

export const getClassNames = (props: IDButtonProps) => {
  const { theme, variant, size, shape, className, block,convex, loading } = props;
  return `DynamicButton ` +
    (convex ? `DynamicButton--convex ` : '') +
    (loading ? `DynamicButton--loading ` : '') +
    `${className} ` +
    `${className}--theme--${theme} ` +
    `${className}--variant--${variant} ` +
    `${className}--size--${size} ` +
    `${className}--shape--${shape} ` +
    (block ? `DynamicButton--block ` : '');
}