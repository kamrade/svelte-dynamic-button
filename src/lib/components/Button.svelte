<script lang="ts">
  import type { SizeType, ThemeType, VariantType, ShapeType } from './Button.js';
  import { mainClassName } from './Button.js';
  import DynamicButton from '$lib/kit/DynamicButton.svelte';

  export let theme: ThemeType = 'secondary';
  export let variant: VariantType = 'contained';
  export let size: SizeType = 'md';
  export let shape: ShapeType = 'rounded';
  export let onClick: (e: MouseEvent) => void = (_e) => {};
  export let block: boolean = false;
  export let disabled: boolean = false;
  export let convex: boolean = false;
  export let loading: boolean = false;
</script>

<DynamicButton
  {mainClassName}
  {size}
  {theme}
  {variant}
  {onClick}
  {block}
  {disabled}
  {convex}
  {loading}
  {shape}
>
  <svelte:fragment slot="prefix">
    <slot name="prefix" />
  </svelte:fragment>
  <svelte:fragment slot="default">
    <slot />
  </svelte:fragment>
</DynamicButton>

<style>
  @import './Button.scss';
</style>
