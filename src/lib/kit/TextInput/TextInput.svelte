<script lang="ts">
  import type { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler } from "svelte/elements";
  import type { TextInputType, TextInputVariant, TextInputSize, KEvent } from "./TextInput.js";

  export let variant: TextInputVariant = "underlined";
  export let size: TextInputSize = "md";
  export let value = "";
  export let onKeydown: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let onKeyup: KeyboardEventHandler<HTMLInputElement> = () => {};
  
	export let onFocus = () => {}; // e: FocusEvent
	export let onBlur: FocusEventHandler<HTMLInputElement> = () => {}; // e: FocusEvent
	export let onChange: ChangeEventHandler<HTMLInputElement> = () => {}; // e: Event
	
  export let placeholder: string = "";
  export let type: TextInputType = "text";
  export let disabled = false;
  export let readonly = false;
  export let label = "";
  export let name: string | null = null;
  export let id: string | null = null;

  export let inputEl: HTMLInputElement | null = null;
  export let isActive = false;

  let textInputClassNames: string;

  let keydownHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => onKeydown(e);
  let keyupHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => onKeyup(e);

  $: textInputClassNames = getClassNames(disabled, readonly, variant, size, isActive);

  const getClassNames = (
    disabled: boolean,
    readonly: boolean,
    variant: TextInputVariant,
    size: TextInputSize,
    isActive: boolean
  ) => {
    let textInputClassName = "TextInput ";
    textInputClassName += disabled ? "TextInput-disabled " : "";
    textInputClassName += readonly ? "TextInput-readonly " : "";
    textInputClassName += `TextInput-variant-${variant} `;
    textInputClassName += `TextInput-size-${size} `;
    if (isActive) {
      textInputClassName += "TextInput-active ";
    }
    return textInputClassName;
  };
</script>

<label class={textInputClassNames}>
  <span class="TextInput-prefix">
    <slot name="prefix" />
  </span>
  {#if label}
    <span class="TextInput-label">
	    {label}
    </span>
  {/if}
  <input
    {disabled}
    {readonly}
    {placeholder}
    class="TextInput-el"
    {type}
    {value}
    on:keydown={keydownHandler}
    on:keyup={keyupHandler}
    on:focus={onFocus}
    on:blur={onBlur}
    on:change={onChange}
    {name}
    {id}
    bind:this={inputEl}
  />
  {#if $$slots.suffix}
    <span class="TextInput-suffix">
	    <slot name="suffix" />
    </span>
  {/if}
</label>

<style lang="scss">
  @import "./TextInput.scss";
</style>
