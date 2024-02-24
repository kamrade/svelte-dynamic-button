<script lang="ts">
  import type { ISimpleButtonProps } from './SimpleButton.js';
  import { mergeProps } from './SimpleButton.js';
  import { defaultProps } from './SimpleButton.defaults.js';
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
  @import './SimpleButton.scss';
</style>
