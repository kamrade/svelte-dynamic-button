import type { IButtonVariant } from "$lib/kit/DynamicButtonScheme.js";

export function setThemeVariables<ButtonVariant>(variant: (IButtonVariant<ButtonVariant> | undefined)) {
  if (variant) {
    const { background, hoverBackground, activeBackground, color, borderColor, focusColor  } = variant;
    return (
      `--background: ${background};` +
      `--hoverBackground: ${hoverBackground};` +
      `--activeBackground: ${activeBackground};` +
      `--color: ${color};` +
      `--borderColor: ${borderColor};` +
      `--focusColor: ${focusColor};`
    );
  }
  return '';
}