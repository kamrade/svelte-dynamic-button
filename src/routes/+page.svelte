<script lang="ts">
  import Btn from '$lib/components/SimpleButton/SimpleButton.svelte';
  import TextInput from '$lib/kit/TextInput/TextInput.svelte';
</script>

<div class="container">
  <h1>Dynamic Button Component</h1>
</div>



<div class="container">
  <h2>Text Input</h2>

  <div style='margin-bottom: 1rem;'>
    <label for="input-1">
      <span style='display: block; margin-bottom: .5rem;'>Label</span>
      <TextInput
        variant='contained'
        type='text'
        placeholder='Placeholder'
        id='input-1'
        size='lg'
      >
        <i class="ri-arrow-right-s-line" slot="suffix" />
      </TextInput>
    </label>
  </div>

  <div style='margin-bottom: 1rem;'>
    <label for="input-1">
      <span style='display: block; margin-bottom: .5rem;'>Label</span>
      <TextInput
        variant='contained'
        type='text'
        placeholder='Placeholder'
        id='input-1'
      >
        <i class="ri-arrow-right-s-line" slot="suffix" />
      </TextInput>
    </label>
  </div>

  <div style='margin-bottom: 1rem;'>
    <TextInput
      variant='contained'
      type='text'
      label='Enter text'
      placeholder='Placeholder'
      size='sm'
    >
      <i class="ri-chat-2-fill" slot='prefix' />
    </TextInput>
  </div>

  <div style='margin-bottom: 1rem;'>
    <TextInput
      variant='underlined'
      type='text'
      label='Enter text'
      placeholder='Placeholder'
      size='sm'
    >
      <i class="ri-chat-2-fill" slot='prefix' />
    </TextInput>
  </div>

  <div style='margin-bottom: 1rem;'>
    <TextInput
      variant='underlined'
      type='text'
      label='Enter text'
      placeholder='Placeholder'
      size='md'
    >
      <i class="ri-chat-2-fill" slot='prefix' />
    </TextInput>
  </div>
</div>



<div class="container">
  <h2>Text Input</h2>
  <TextInput
    variant='contained'
    type='text'
    label='Enter text'
    placeholder='Placeholder'

  >
    <i class="ri-chat-4-line" slot="prefix" />
    <i class="ri-arrow-right-line" slot="suffix" />
    
  </TextInput>
</div>



<div class="container">
  <h2>Icon Button</h2>
  <Btn props={{ iconButton: true }}>
    <i class="ri-inbox-fill" slot="prefix" />
    <i class="ri-inbox-fill" slot="suffix" />
  </Btn>
  <Btn props={{ iconButton: true, loading: true }}>
    <i class="ri-inbox-fill" slot="prefix" />
  </Btn>
  
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
  <h2>Simple default medium</h2>

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

  <div style="margin: .5rem 0;">
    <Btn props={{ theme: 'primary', block: true }}>
      <i class="ri-arrow-right-fill" slot="suffix" />
      <b>Main action</b>
    </Btn>
  </div>

</div>



<div class="container">
  <h2>Large button</h2>

  <Btn props={{ size: 'xl', theme: 'primary', variant: 'outlined', iconButton: true }}>
    <i class="ri-arrow-right-fill" slot="prefix" />
  </Btn>
  <Btn props={{ size: 'xl', theme: 'primary', variant: 'outlined' }}>
    <b>XLarge Button</b>
  </Btn>
  <Btn props={{ size: 'xl', theme: 'primary', variant: 'contained' }}>
    <b>XLarge Button</b>
  </Btn>

</div>


<style>
  @import '../lib/kit/global.css';
  
  .container {
    max-width: 800px;
    padding: 4rem 0;
    margin: 0 auto;
  }
</style>
