<template>
  <div class="componentContainer">
    <H2> TECHNICAL DETAILS</H2>
    <h3>Boosters: {{rocketsData[0].boosters}}</h3>
    <h3>Stages: {{rocketsData[0].stages}}</h3>
    <h3>Mass(Kg): {{rocketsData[0].mass.kg}}</h3>
    <h3>Mass(Lb): {{rocketsData[0].mass.lb}}</h3>
    <h3>Payload Orbit: {{rocketsData[0].payload_weights[0].name}}</h3>
    <h3>Payload Weight(Kg): {{rocketsData[0].payload_weights[0].kg}}</h3>
    <h3>Payload Weight(Lb): {{rocketsData[0].payload_weights[0].lb}}</h3>
    <h3>Landing Legs: {{rocketsData[0].landing_legs.number}}</h3>
    <h3>Cost per Launch: ${{rocketsData[0].cost_per_launch}}</h3>
    <h3>Country of Origin: {{rocketsData[0].country}}</h3>
  </div>
</template>

<script>
export default {
  name: "rockets_technicalDetails",
  props: ['rocketsData'],}
</script>

<style>

</style>


