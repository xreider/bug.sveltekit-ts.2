<script lang="ts">

  import '$lib/styles/index.scss';

  let {children} = $props();
</script>

<div>{@render children()}</div>

<style lang="scss">
  @use "$lib/styles/includes/brakepoints.scss" as *;


  div {
    @include red;
  }
</style>
