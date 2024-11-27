<script>
  import { onMount } from "svelte";

  let { pets } = $props();

  onMount(() => {
    console.log("Pets mounted");
  })
</script>

<div>
  {JSON.stringify(pets)}
</div>
