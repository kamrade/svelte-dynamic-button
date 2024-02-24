<script lang="ts">
  import Button from '$lib/components/MagicButton/Button.svelte';
  import Btn from '$lib/components/SimpleButton/SimpleButton.svelte';
  const clickHandler = () => console.log('click');

  let isLoading = true;
  const toggleLoad = () => (isLoading = !isLoading);
  let props = {};
  $: props = { ...props, loading: isLoading };
</script>

<div class="container">
  <h1>Dynamic Button Component</h1>

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
    <Button theme="secondary" variant="contained">Dynamic Secondary Button 2</Button>
    <Button theme="secondary" variant="outlined">Dynamic Secondary Button 3</Button>
  </div>

  <div style="margin-bottom: 1rem">
    <Button convex size="sm" theme="primary" variant="text">Dynamic Secondary Button 1</Button>
    <Button convex size="sm" theme="primary" variant="contained">Dynamic Secondary Button 2</Button>
    <Button convex size="sm" theme="primary" variant="outlined">Dynamic Secondary Button 3</Button>
  </div>

  <div style="margin-bottom: 1rem">
    <Button theme="primary" variant="contained" block>Dynamic Button 2</Button>
  </div>
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
