<script lang="ts">
  import DynamicButton from "$lib/DynamicButton.svelte";
  import { IButtonTheme, IDynamicButtonProps } from "$lib/DynamicButton.props.js";

  export type ThemeType = 'primary' | 'secondary';
  export type VariantType = 'contained' | 'simple';
  export type SizeType = 'sm' | 'lg';
  export type ShapeType = 'straight' | 'rounded';

  export const themes: IButtonTheme<ThemeType, VariantType>[] = [{
    name: 'primary',
    variants: [{
      name: 'contained',
      background: 'black',
      color: 'white'
    }]
  }, {
    name: 'secondary',
    variants: [{
      name: 'contained',
      background: 'lightgray',
      color: 'black'
    }]
  }];

  export const getButtonProps = (props: IDynamicButtonProps<ThemeType, VariantType, SizeType, ShapeType>) => ({
    theme: props.theme,
    variant: props.variant
  });


  export type ThemeTypeOne = "primary" | "secondary";

  export let theme: ThemeTypeOne = "secondary";
  export let variant: VariantType = "contained";

</script>

<DynamicButton props={getButtonProps({ theme, variant })} themes={themes} onClick={(e) => console.log(e.target)}>
  <slot/>
</DynamicButton>
