<script lang="ts">
  import { getClassNames } from './DynamicButton.js';
  import type { IDButtonProps } from './DynamicButton.js';

  export let props: IDButtonProps | null = null;

  export let onClick: (e: MouseEvent) => void = (_e) => {};
  export let theme: string = '';
  export let variant: string = '';
  export let size: string = '';
  export let shape: string = '';
  export let className: string = 'DynamicButton';
  export let block: boolean = false;
  export let disabled: boolean = false;
  export let convex: boolean = false;
  export let loading: boolean = false;

  export let customLoader = false;

  let buttonEl: HTMLButtonElement;

  export const focus = () => buttonEl.focus();

  // inner variables
  let isLoading: boolean | undefined = false;
  let clickHandler: ((e: MouseEvent) => void) | undefined = (_e) => {};
  let isDisabled: boolean | undefined = false;

  let buttonClassName = '';
  $: {
    buttonClassName = props
      ? getClassNames(props)
      : getClassNames({ theme, variant, size, shape, className, block, convex, loading });

    isLoading = props ? props.loading : loading;
    clickHandler = props ? props.onClick : onClick;
    isDisabled = props ? props.disabled : disabled;
  }
</script>

<button
  bind:this={buttonEl}
  on:click={clickHandler}
  class={buttonClassName}
  disabled={isDisabled || isLoading}
  {...$$restProps}
>
  <span class="DynamicButtonContent">
    {#if $$slots.prefix}
      <span class="DynamicButton--prefixIconContent">
        <slot name="prefix" />
      </span>
    {/if}

    {#if $$slots.default}
      <span class={`DynamicButton--content`}>
        <slot />
      </span>
    {/if}

    {#if $$slots.suffix}
      <span class="DynamicButton--suffixIconContent">
        <slot name="suffix" />
      </span>
    {/if}
  </span>

  {#if isLoading}
    <span class="DynamicButton--loader">
      {#if customLoader}
        <slot name="loader" />
      {:else}
        <span class="DynamicButton--spinner" />
      {/if}
    </span>
  {/if}
</button>

<style lang="scss">
  @import './DynamicButton.scss';
</style>
