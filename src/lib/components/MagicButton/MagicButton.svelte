<script lang="ts">
  import type { SizeType, ThemeType, VariantType, ShapeType } from './MagicButton.js';
  import { mainClassName } from './MagicButton.js';
  import { DynamicButton } from '$lib/index.js';

  export let className: string = mainClassName;
  export let theme: ThemeType = 'secondary';
  export let variant: VariantType = 'contained';
  export let size: SizeType = 'md';
  export let shape: ShapeType = 'rounded';
  export let block: boolean = false;
  export let disabled: boolean = false;
  export let convex: boolean = false;
  export let loading: boolean = false;
  export let onClick: (e: MouseEvent) => void = (_e) => {};
</script>

<DynamicButton
  {className}
  {theme}
  {variant}
  {size}
  {shape}
  {block}
  {disabled}
  {convex}
  {loading}
  {onClick}
  {...$$restProps}
>
  <slot slot="prefix" name="prefix" />
  <slot slot="suffix" name="suffix" />
  <slot />
</DynamicButton>

<style>
  @import './MagicButton.scss';
</style>
