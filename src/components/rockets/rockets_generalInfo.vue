<template>
<div class="componentContainer">
  <H1>{{this.rocketsData[0].rocket_name}}</H1>
    <h2>GENERAL INFO</h2>
    <h3>{{rocketsData[0].description}}</h3>
</div>
</template>

<script>
export default {
  name: "rockets_generalInfo",
  props: ['rocketsData'],
  components: {
  },}
</script>

<style>

</style>


