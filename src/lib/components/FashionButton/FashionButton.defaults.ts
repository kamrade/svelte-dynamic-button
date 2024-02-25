import { mainClassName } from "./FashionButton.js";
import type { ISimpleButtonProps } from "./FashionButton.js";

export let defaultProps: ISimpleButtonProps = {
  className: mainClassName,
  // theme: 'primary',
  // variant: 'contained',
  // size: 'lg',
  // shape: 'straight',
  block: false,
  disabled: false,
  convex: false,
  loading: false
};