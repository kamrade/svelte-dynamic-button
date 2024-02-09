<script lang="ts">
  type ContainerSize = "sm" | "lg";
  export let size: ContainerSize = "sm";
</script>

<div class={`Container Container-${size}`}>
  <slot/>
</div>