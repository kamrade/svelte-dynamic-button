import { mainClassName } from "./SimpleButton.js";
import type { ISimpleButtonProps } from "./SimpleButton.js";

export let defaultProps: ISimpleButtonProps = {
  className: mainClassName,
  theme: 'secondary',
  variant: 'contained',
  size: 'sm',
  shape: 'straight',
  block: false,
  disabled: false,
  convex: false,
  loading: false
};