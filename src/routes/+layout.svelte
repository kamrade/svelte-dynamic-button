<script lang="ts">
	// import { browser } from '$app/environment';
	// import { addStylesheet } from '$lib/helpers/add-stylesheet.js';
	// if (browser) {
	// 	addStylesheet(
	// 		setButtonVariables({ mainClassName, themes, sizes }),
	// 		'dynamic-button-styles',
	// 		document
	// 	);
	// }

	// import ButtonProvider from '$lib/kit/ButtonProvider.svelte';
	// import { setButtonVariables } from '$lib/helpers/set-buttons-variables.js';
	// import { themes, sizes, mainClassName } from '$lib/components/Button.js';
</script>

<!-- <ButtonProvider stylesheet={setButtonVariables({ mainClassName, themes, sizes })}> -->
<div class="Layout">
	<slot />
</div>
<!-- </ButtonProvider> -->
