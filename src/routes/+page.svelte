<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/kit/Container.svelte';
</script>

<Container>
	<h1>Dynamic Button Component</h1>
	<Button theme="primary" variant="text">Dynamic Button 1</Button>
	<Button theme="primary" variant="contained">Dynamic Button 2</Button>
	<Button theme="primary" variant="outlined">Dynamic Button 3</Button>
</Container>
