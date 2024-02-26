<script lang="ts">
  let counter = 0;
</script>

<p>Counter is {counter}</p>
<button
  type="button"
  on:click={() => {
    counter++;
  }}
>
  Increment
</button>
