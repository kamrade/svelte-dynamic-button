<script lang="ts">

  export let onClick: (e: MouseEvent) => void;
  export let theme: string;
  export let variant: string;

  console.log(theme);
  console.log(variant);

</script>

<button on:click={onClick} class={`MagicButton theme-${theme} variant-${variant}`}>
  <slot/>
</button>

<style>
  .MagicButton {
    position: relative;
  }

  .MagicStuff {
    position: relative;
  }
</style>