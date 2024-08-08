<script lang="ts">
  // TODO Can't find proper components for this in GDS
  export let service: string;
</script>

<div class="service-header">
  <div class="govuk-width-container govuk-caption-xl"><b>{service}</b></div>
</div>

<style>
  .service-header {
    background-color: #f3f2f1;
    border-bottom: 1px solid #b1b4b6;
    margin-left: -8px;
    margin-right: -8px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
</style>
