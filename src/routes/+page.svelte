<script lang="ts">
  import Button from '$lib/components/MagicButton/MagicButton.svelte';
  import Btn from '$lib/components/SimpleButton/SimpleButton.svelte';
  import FashionButton from '$lib/components/FashionButton/FashionButton.svelte';
  const clickHandler = () => console.log('click');

  let isLoading = true;
  const toggleLoad = () => (isLoading = !isLoading);
  let props = {};
  $: props = { ...props, loading: isLoading };
</script>

<div class="container">
  <h1>Dynamic Button Component</h1>

  <div style="margin-bottom: 2rem;">
    <FashionButton props={{ loading: isLoading }} style="cursor: pointer;">
      <i class="ri-inbox-fill" slot="prefix" />
      <i class="ri-mail-fill" slot="suffix" />
      Custom Preloader
      <span slot="loader">Loading</span>
    </FashionButton>
  </div>

  <div style="margin-bottom: 2rem;">
    <FashionButton style="cursor: pointer;">
      <i class="ri-inbox-fill" slot="prefix" />
      Fashion Button
    </FashionButton>
    <FashionButton props={{ loading: isLoading }} style="cursor: pointer;">Fashion Button</FashionButton>
    <FashionButton props={{ disabled: isLoading }} style="cursor: pointer;">Disabled Fashion Button</FashionButton>
  </div>

  <div style="margin-bottom: 1rem">
    <Btn props={{ ...props }}>Simple button</Btn>
    <Btn props={{ theme: 'primary', onClick: toggleLoad }}>Toggle single button</Btn>
  </div>

  <div style="margin-bottom: 1rem; font-size: 20px; color: red;">
    <i class="ri-admin-line" />
    <i class="ri-admin-fill" />
    <i class="ri-arrow-left-up-line" />
  </div>

  <div style="margin-bottom: 1rem">
    <Button onClick={clickHandler} theme="primary" variant="text">
      <i class="ri-arrow-left-up-line" slot="prefix" />
      Dynamic Button with Icon
    </Button>

    <Button loading={isLoading} theme="primary" variant="contained">Dynamic Button 2</Button>
    <Button onClick={toggleLoad} convex theme="primary" variant="contained">Toggle</Button>
  </div>

  <div style="margin-bottom: 1rem">
    <Button theme="secondary" variant="text">
      <i class="ri-arrow-left-up-line" slot="prefix" />
      Dynamic Secondary Button 1</Button
    >
    <Button theme="secondary" variant="contained">
      <i class="ri-chat-4-fill" slot="prefix" />
      Dynamic Secondary Button 2</Button
    >
    <Button theme="secondary" variant="outlined">Dynamic Secondary Button 3</Button>
  </div>

  <div style="margin-bottom: 1rem">
    <Button convex size="sm" theme="primary" variant="text">
      <i class="ri-mail-fill" slot="suffix" />
      Dynamic Secondary Button 1
    </Button>
    <Button convex size="sm" theme="primary" variant="contained">Dynamic Secondary Button 2</Button>
    <Button convex size="sm" theme="primary" variant="outlined">Dynamic Secondary Button 3</Button>
  </div>

  <div style="margin-bottom: 1rem">
    <Button theme="primary" variant="contained" block>
      Dynamic Button 2
      <i class="ri-mail-fill" slot="suffix" />
    </Button>
  </div>
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
