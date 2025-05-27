<script lang="ts">
  import { getClassNames } from './DynamicButton.js';
  import type { IDButtonProps, ButtonType } from './DynamicButton.js';

  /*
  // Можно передавать параметры двумя спопсобами 
  // Через props объектом или по одному
  */
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
  export let iconButton = false;

  export let customLoader = false;

  export let type: ButtonType = 'button';
  export let name: string = '';
  export let value: string = '';

  let buttonEl: HTMLButtonElement;

  export const focus = () => buttonEl.focus();

  // inner variables
  let isLoading: boolean | undefined = false;
  let clickHandler: ((e: MouseEvent) => void) | undefined = (_e) => {};
  let isDisabled: boolean | undefined = false;
  let isIconButton: boolean | undefined = false;

  let buttonClassName = '';
  $: {

    isIconButton = props ? props.iconButton : iconButton;
    isLoading = props ? props.loading : loading;
    clickHandler = props ? props.onClick : onClick;
    isDisabled = props ? props.disabled : disabled;

    buttonClassName = props
      ? getClassNames(props)
      : getClassNames({ theme, variant, size, shape, className, block, convex, loading, iconButton });

    
  }

</script>

<button
  bind:this={buttonEl}
  on:click={clickHandler}
  class={buttonClassName}
  disabled={isDisabled || isLoading}
  {type} {name} {value}
  {...$$restProps}
>
  <span class="DynamicButtonContent" >
    
    <span class="DynamicButton--prefixIconContent" style="display: contents;">
      <slot name="prefix" />
    </span>

    <span class={`DynamicButton--content`} style={`display: ${(isIconButton) ? 'none' : 'contents'};`}>
      <slot />
    </span>

    <span class="DynamicButton--suffixIconContent" style={`display: ${(isIconButton) ? 'none' : 'contents'};`}>
      <slot name="suffix" />
    </span>

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
