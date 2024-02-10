<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  const clickHandler = () => console.log('click');
</script>

<h1>Dynamic Button Component</h1>

<div style="margin-bottom: 1rem; font-size: 20px; color: red;">
  <i class="ri-admin-line"></i>
  <i class="ri-admin-fill"></i>
  <i class="ri-arrow-left-up-line"></i>
</div>

<div style="margin-bottom: 1rem">
  <Button onClick={clickHandler} theme="primary" variant="text">
    <i class="ri-arrow-left-up-line" slot="prefix" />
    Dynamic Button with Icon
  </Button>

  <Button loading disabled theme="primary" variant="contained">Dynamic Button 2</Button>
  <Button convex theme="primary" variant="contained">Dynamic Button 3</Button>
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
