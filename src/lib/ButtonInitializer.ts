import type { IButtonTheme, IDynamicButtonProps } from "./DynamicButtonScheme.js";

export type ThemeType = 'primary' | 'secondary';
export type VariantType = 'contained' | 'simple';
export type SizeType = 'sm' | 'lg';
export type ShapeType = 'straight' | 'rounded';

export const themes: IButtonTheme<ThemeType, VariantType>[] = [{
  name: 'primary',
  variants: [{
    name: 'contained',
    background: 'black',
    color: 'white'
  }]
}, {
  name: 'secondary',
  variants: [{
    name: 'contained',
    background: 'lightgray',
    color: 'black'
  }]
}];

export const getButtonProps = (props: IDynamicButtonProps<ThemeType, VariantType, SizeType, ShapeType>) => ({
  theme: props.theme,
  variant: props.variant
});