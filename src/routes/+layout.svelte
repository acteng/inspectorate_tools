<script lang="ts">
  import "../style/main.css";
  import { base } from "$app/paths";
  import { initAll } from "govuk-frontend";

  initAll();
</script>

<nav>
  <a href={base}>home</a>
</nav>

<slot />
