<script>
  import { onMount } from "svelte";

  onMount(() => {
    console.log("Navigation mounted");
  })

  $effect(() => {
    console.log("Navigation effect");
	});

</script>

<div>
  <a href="/a">A</a>
  <a href="/b">B</a>
  <a href="/c">C</a>
</div>
