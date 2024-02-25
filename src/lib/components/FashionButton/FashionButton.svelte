<script lang="ts">
  import type { ISimpleButtonProps } from './FashionButton.js';
  import { mergeProps } from './FashionButton.js';
  import { defaultProps } from './FashionButton.defaults.js';
  import DynamicButton from '$lib/kit/DynamicButton.svelte';
  export let props: ISimpleButtonProps = {};

  let innerProps: ISimpleButtonProps;
  $: innerProps = mergeProps(defaultProps, props);
</script>

<DynamicButton props={{ ...innerProps }} {...$$restProps}>
  <svelte:fragment slot="prefix">
    <slot name="prefix" />
  </svelte:fragment>
  <svelte:fragment slot="default">
    <slot />
  </svelte:fragment>
</DynamicButton>

<style lang="scss">
  @import './FashionButton.scss';
</style>
