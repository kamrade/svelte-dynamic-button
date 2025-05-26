<script lang="ts">
  import Btn from '$lib/components/SimpleButton/SimpleButton.svelte';
</script>

<div class="container">
  <h1>Dynamic Button Component</h1>
</div>



<div class="container">
  <h2>Simple default small</h2>

  <Btn props={{ disabled: true, size: 'sm' }}>
    <i class="ri-inbox-fill" slot="prefix" />
    <b>Simple button bold</b>
  </Btn>

  <Btn props={{ size: 'sm' }}>
    <b>Simple button</b>
  </Btn>

  <Btn props={{ variant: 'outlined', size: 'sm' }}>
    <b>Simple outlined button</b>
  </Btn>

  <Btn props={{ theme: 'primary', size: 'sm' }}>
    <i class="ri-arrow-right-fill" slot="suffix" />
    <b>Main action</b>
  </Btn>

</div>



<div class="container">
  <h2>Simple default small</h2>

  <Btn props={{ disabled: true }}>
    <i class="ri-inbox-fill" slot="prefix" />
    <b>Simple button bold</b>
  </Btn>

  <Btn props={{}}>
    <b>Simple button</b>
  </Btn>

  <Btn props={{ variant: 'outlined' }}>
    <b>Simple outlined button</b>
  </Btn>

  <Btn props={{ theme: 'primary' }}>
    <i class="ri-arrow-right-fill" slot="suffix" />
    <b>Main action</b>
  </Btn>

</div>



<div class="container">
  <h2>Large button</h2>

  <Btn props={{ size: 'xl', theme: 'primary', variant: 'outlined' }}>
    <b>XLarge Button</b>
  </Btn>
  <Btn props={{ size: 'xl', theme: 'primary', variant: 'contained' }}>
    <b>XLarge Button</b>
  </Btn>

</div>


<style>
  .container {
    max-width: 800px;
    padding: 4rem 0;
    margin: 0 auto;
  }
</style>
