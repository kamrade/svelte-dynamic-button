import { mainClassName } from "./SimpleButton.js";
import type { ISimpleButtonProps } from "./SimpleButton.js";

export const defaultProps: ISimpleButtonProps = {
  className: mainClassName,
  theme: 'secondary',
  variant: 'contained',
  size: 'lg',
  shape: 'rounded',
  block: false,
  disabled: false,
  convex: false,
  loading: false,
  iconButton: false
};
