<script lang="ts">
  interface ISimpleButtonProps {
    className?: string;
    theme?: string;
    variant?: string;
    size?: string;
    shape?: string;
    block?: boolean;
    disabled?: boolean;
    convex?: boolean;
    loading?: boolean;
    onClick?: (e: MouseEvent) => void;
  }

  export let props: ISimpleButtonProps = {};

  console.log(props);

  let { theme, variant, size, shape, className, block, disabled, convex, loading, onClick } = props;

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
</script>

<button on:click={onClick} class={buttonClassName} disabled={disabled || loading} {...$$restProps}>
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
