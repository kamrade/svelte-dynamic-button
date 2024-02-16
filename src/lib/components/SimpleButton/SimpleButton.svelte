<script lang="ts">
  import type { SizeType, ThemeType, VariantType, ShapeType } from './SimpleButton.js';
  import { mainClassName } from './SimpleButton.js';
  import DButton from '$lib/kit/DButton.svelte';

  interface ISimpleButtonProps {
    className?: string;
    theme?: ThemeType;
    variant?: VariantType;
    size?: SizeType;
    shape?: ShapeType;
    block?: boolean;
    disabled?: boolean;
    convex?: boolean;
    loading?: boolean;
    onClick?: (e: MouseEvent) => void;
  }

  export let props: ISimpleButtonProps = {};

  let defaultProps: ISimpleButtonProps = {
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

  let innerProps = {
    ...defaultProps,
    ...props
  };
</script>

<DButton props={innerProps} {...$$restProps}>
  <svelte:fragment slot="prefix">
    <slot name="prefix" />
  </svelte:fragment>
  <svelte:fragment slot="default">
    <slot />
  </svelte:fragment>
</DButton>

<style lang="scss">
  @import './SimpleButton.scss';
</style>
