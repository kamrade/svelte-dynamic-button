<script lang="ts">
  export let onClick: (e: MouseEvent) => void = (_e) => {};
  export let theme: string;
  export let variant: string;
  export let size: string;
  export let shape: string;
  export let className: string = 'MagicButton';
  export let block: boolean = false;
  export let disabled: boolean = false;
  export let convex: boolean = false;
  export let loading: boolean = false;

  let buttonClassName =
    `DynamicButton ` +
    (convex ? `DynamicButton--convex ` : '') +
    (loading ? `DynamicButton--loading ` : '') +
    `${className} ` +
    `${className}--theme--${theme} ` +
    `${className}--variant--${variant} ` +
    `${className}--size--${size} ` +
    `${className}--shape--${shape} ` +
    (block ? `DynamicButton--block ` : '');

  // console.log($$props);
</script>

<button on:click={onClick} class={buttonClassName} {disabled} {...$$restProps}>
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
  </span>
  {#if loading}
    <span class="DynamicButton--loader">
      <span class="DynamicButton--spinner" />
    </span>
  {/if}
</button>

<style lang="scss">
  @import './DynamicButton.scss';
</style>
