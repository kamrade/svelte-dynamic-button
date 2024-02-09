<script lang="ts">
	import { onMount } from 'svelte';
	import { addStylesheet } from '$lib/helpers/add-stylesheet.js';
	export let stylesheet: string = '';
	onMount(() => addStylesheet(stylesheet, 'dynamic-button-styles', document));
</script>

<slot />
