<script lang="ts">
  import type { ThemeType, VariantType } from "$lib/ButtonInitializer.js";

  import DynamicButton from "$lib/DynamicButton.svelte";
  export let theme: ThemeType = "secondary";
  export let variant: VariantType = "contained";
</script>

<DynamicButton {theme} {variant} onClick={(e) => console.log(e.target)}>
  <slot/>
</DynamicButton>
