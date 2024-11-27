<script>
  import { onMount } from "svelte";

  let { age } = $props();

  onMount(() => {
    console.log("Age mounted");
  })

  $effect(() => {
    console.log("Age effect");
  })

  console.log("Age console");
</script>

<div>
  {age}
</div>
