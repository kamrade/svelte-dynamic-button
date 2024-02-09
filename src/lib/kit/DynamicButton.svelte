<script lang="ts">
	export let onClick: (e: MouseEvent) => void;
	export let theme: string;
	export let variant: string;
	export let size: string;
	export let mainClassName: string;
</script>

<button
	on:click={onClick}
	class={`DynamicButton ${mainClassName} ${mainClassName}--theme--${theme} ${mainClassName}--variant--${variant} ${mainClassName}--size--${size}`}
>
	<slot />
</button>

<style lang="scss">
	@import './DynamicButton.scss';
</style>
