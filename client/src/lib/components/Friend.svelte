<script>
  import { onMount } from "svelte";

  let { friends } = $props();

  onMount(() => {
    console.log("Friend mounted");
  })
</script>

<div>
  {JSON.stringify(friends)}
</div>
