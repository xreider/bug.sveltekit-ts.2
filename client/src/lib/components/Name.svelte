<script>
  import { onMount } from "svelte";

  let { name } = $props();

  onMount(() => {
    console.log("Name mounted");
  })

  console.log("Name console");
</script>

<div>
  {name}
</div>
