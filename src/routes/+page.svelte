<script lang="ts">
  import { onMount } from 'svelte';
  import Button from '$lib/components/MagicButton/MagicButton.svelte';
  import FashionButton from '$lib/components/FashionButton/FashionButton.svelte';
  import Btn from '$lib/components/SimpleButton/SimpleButton.svelte';
</script>

<div class="container">
  <h1>Dynamic Button Component</h1>
</div>



<div class="container">
  <h2>Simple default small</h2>

  <Btn props={{
    size: 'sm'
  }}>Simple button bold</Btn>

  <Btn props={{
    size: 'sm'
  }}>Simple button</Btn>

  <Btn props={{
    size: 'sm',
    variant: 'outlined'
  }}>Simple outlined button</Btn>

</div>



<div class="container">
  <h2>Simple primary large</h2>

  <Btn props={{
    size: 'lg',
    theme: 'primary'
  }}><i class="ri-inbox-fill" slot="prefix" /><b>Simple primary contained button</b></Btn>

  <Btn props={{
    size: 'lg'
  }}><b>Simple button bold</b></Btn>

  <Btn props={{
    size: 'lg',
    theme: 'primary',
    variant: 'outlined'
  }}><b>Simple button</b></Btn>

</div>



<div class="container">
  <h2>Simple primary large</h2>

  <Btn props={{
    size: 'lg',
    theme: 'primary',
    shape: 'straight'
  }}>Simple primary contained button</Btn>

  <Btn props={{
    size: 'lg',
    shape: 'straight'
  }}>Simple button bold</Btn>

  <Btn props={{
    size: 'lg',
    theme: 'primary',
    variant: 'outlined',
    shape: 'straight'
  }}>Simple button</Btn>

</div>

<style>
  .container {
    max-width: 800px;
    padding: 4rem 0;
    margin: 0 auto;
  }
</style>
