<script lang="ts">
  import type { ISimpleButtonProps } from './FashionButton.js';
  import { mergeProps } from './FashionButton.js';
  import { defaultProps } from './FashionButton.defaults.js';
  import { DynamicButton } from '$lib/index.js';
  export let props: ISimpleButtonProps = {};

  export let buttonFocus: () => unknown = () => {};

  let innerProps: ISimpleButtonProps;
  $: innerProps = mergeProps(defaultProps, props);
</script>

<DynamicButton bind:focus={buttonFocus} props={{ ...innerProps }} {...$$restProps} customLoader={$$slots.loader}>
  <slot name="prefix" slot="prefix" />
  <slot name="suffix" slot="suffix" />
  <slot />
  <slot name="loader" slot="loader" />
</DynamicButton>

<style lang="scss">
  @import './FashionButton.scss';
</style>
