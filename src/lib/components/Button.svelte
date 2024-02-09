<script lang="ts" context="module">
	import type { SizeType, ThemeType, VariantType } from './Button.js';
	import { mainClassName } from './Button.js';
</script>

<script lang="ts">
	import DynamicButton from '$lib/kit/DynamicButton.svelte';
	export let theme: ThemeType = 'secondary';
	export let variant: VariantType = 'contained';
	export let size: SizeType = 'md';
</script>

<DynamicButton {size} {mainClassName} {theme} {variant} onClick={(e) => console.log(e.target)}>
	<slot />
</DynamicButton>

<style>
	@import './Button.css';
</style>
