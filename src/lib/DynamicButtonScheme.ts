export interface IDynamicButtonProps<ThemeType, VariantType, SizeType, ShapeType> {
  theme?: ThemeType;
  variant?: VariantType;
  size?: SizeType;
  shape?: ShapeType;
}

export interface IButtonTheme<ThemeType, ButtonVariant> {
  name: ThemeType;
  variants: IButtonVariant<ButtonVariant>[];
}

export interface IButtonVariant<ButtonVariants> {
  name: ButtonVariants;
  background: string;
  color: string;
}