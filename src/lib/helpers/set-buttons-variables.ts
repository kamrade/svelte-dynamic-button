import type { IButtonGeneratorData } from '../kit/DynamicButtonScheme.js';
import { setThemeVariables } from './set-theme-variables.js';

export function setButtonVariables<ThemeType, ButtonVariant>(data: IButtonGeneratorData<ThemeType, ButtonVariant>) {

  const allThemes: ThemeType[] = data.themes.map(theme => theme.name);
  const allVariants = data.themes[0].variants.map(variant => variant.name);
  const allSizes = data.sizes.map(size => size.name);
  
  let themeVariantCss = '';
  let allSizesCss = '';

  const focusOffset = 3;
  let height = 0;
  let focusHeight = 0;

  allThemes.map(themeType => {
    allVariants.map(variantType => {

      let st = 
        data.themes.find(
          (theme) => theme.name === themeType
        )?.variants?.find(
          (variant) => variant.name === variantType
        );

      themeVariantCss += `.${data.mainClassName}.${data.mainClassName}--theme--${themeType}.${data.mainClassName}--variant--${variantType} {`
      themeVariantCss += setThemeVariables<ButtonVariant>(st);
      themeVariantCss += '}';
    })
  });

  allSizes.map((sizeType) => {
    allSizesCss += `.${data.mainClassName}.${data.mainClassName}--size--${sizeType} {`;
    let sz = data.sizes.find(size => size.name === sizeType);
    const paddingY = sz?.paddingY || 0;
    const paddingX = sz?.paddingX || 0;
    const fontSize = sz?.fontSize || 0;
    const lineHeight = sz?.lineHeight || 0;
    const borderWidth = sz?.borderWidth || 1;
    const innerGap = sz?.innerGap;
    const focusBorderOffset = -1 * ((sz?.borderWidth || 1) + focusOffset);
    height = (paddingY * 2) + fontSize * lineHeight + borderWidth * 2;
    focusHeight = height + (focusOffset * 2);

    allSizesCss += (
      `--paddingY: ${paddingY}px;` +
      `--paddingX: ${paddingX}px;` +
      `--innerGap: ${innerGap}px;` +
      `--fontSize: ${fontSize}px;` +
      `--lineHeight: ${lineHeight};` +
      `--borderWidth: ${borderWidth}px;` +
      `--focusBorderOffset: ${focusBorderOffset}px;` +
      `--focusHeight: ${focusHeight}px;` +
      `}`
    );
  });

  return themeVariantCss + allSizesCss;
}
