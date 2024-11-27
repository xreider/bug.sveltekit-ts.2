<script>
  import { onMount } from "svelte";

  let { address } = $props();

  onMount(() => {
    console.log("Address mounted");
  })
</script>

<div>
  {JSON.stringify(address)}
</div>
