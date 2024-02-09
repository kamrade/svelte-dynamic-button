import type { SizeType } from "$lib/components/Button.js";

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
  hoverBackground: string;
  activeBackground: string;
  borderColor: string;
  focusColor: string;
  convex?: boolean;
  focusFrame?: boolean;
}

export interface IButtonGeneratorData<ThemeType, ButtonVariant> {
  themes: IButtonTheme<ThemeType, ButtonVariant>[];
  sizes: IButtonSize<SizeType>[];
  mainClassName: string;
}

export interface IButtonSize<SizeType> {
  name: SizeType;
  paddingY: number;
  paddingX: number;
  innerGap: number;
  fontSize: number;
  lineHeight: number;
  borderWidth: number;
}
