<script lang="ts">
  import type { IDynamicButtonProps, IButtonTheme } from './DynamicButton.props';
  export let onClick: (e: MouseEvent<HTMLButtonElement>) => void = null;

  export let props: IDynamicButtonProps;
  export let themes: IButtonTheme;

  console.log(props);
  console.log(themes);

</script>

<button on:click={onClick}>
  <slot/>
</button>
