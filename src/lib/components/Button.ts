import type { IButtonTheme, IButtonSize } from "$lib/kit/DynamicButtonScheme.js";
export type ThemeType = 'primary' | 'secondary';
export type VariantType = 'contained' | 'text' | 'outlined';
export type SizeType = 'sm' | 'md' | 'lg';

export const mainClassName = 'MagicButton';

export const sizes: IButtonSize<SizeType>[] = [{
  name: 'sm',
  paddingY: 2,
  paddingX: 8,
  innerGap: 2,
  fontSize: 12,
  lineHeight: 1.5,
  borderWidth: 1,
}, {
  name: 'md',
  paddingY: 4,
  paddingX: 12,
  innerGap: 4,
  fontSize: 14,
  lineHeight: 1.5,
  borderWidth: 1,
}, {
  name: 'lg',
  paddingY: 8,
  paddingX: 12,
  innerGap: 5,
  fontSize: 14,
  lineHeight: 1.5,
  borderWidth: 1,
}];

export const themes: IButtonTheme<ThemeType, VariantType>[] = [
  {
    name: 'primary',
    variants: [
      {
        name: 'text',
        background: 'transparent',
        hoverBackground: '#E7F6FF',
        activeBackground: '#DBF1FF',
        borderColor: 'transparent',
        color: '#1983BF',
        focusColor: '#7ED1FF',
        convex: false,
        focusFrame: true,
      },
      {
        name: 'contained',
        background: '#34B0F6',
        hoverBackground: '#24A4EC',
        activeBackground: '#1D9BE3',
        borderColor: 'transparent',
        color: '#ffffff',
        focusColor: '#7ED1FF',
        convex: true,
        focusFrame: true,
      }, {
        name: 'outlined',
        background: 'transparent',
        hoverBackground: '#E7F6FF',
        activeBackground: '#DBF1FF',
        borderColor: '#7ED1FF',
        color: '#1983BF',
        focusColor: '#7ED1FF',
        convex: true,
        focusFrame: true,
      }
    ]
  },
  {
    name: 'secondary',
    variants: [{
      name: 'text',
      background: 'transparent',
      hoverBackground: '#F3F6F8',
      activeBackground: '#EBEEF0',
      borderColor: 'transparent',
      color: '#272D34',
      focusColor: '#7ED1FF',
    }, {
      name: 'contained',
      background: '#F3F6F8',
      hoverBackground: '#EBEEF0',
      activeBackground: '#E3E6E8',
      borderColor: '#E3E6E8',
      color: '#272D34',
      focusColor: '#7ED1FF',
    }, {
      name: 'outlined',
      background: 'transparent',
      hoverBackground: '#F3F6F8',
      activeBackground: '#EBEEF0',
      borderColor: '#C1CAD0',
      color: '#272D34',
      focusColor: '#7ED1FF',
    }]
  }
];
