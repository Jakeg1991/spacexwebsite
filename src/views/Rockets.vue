<template>
<div class="componentContainer">
  <h1>ROCKETS</h1>
<rockets_rocketSelector ref="rocketSelector" :rocketsData="this.$store.state.rockets"/>
<rockets_generalInfo ref="generalInfo" :rocketsData="this.chosenRocketData"/>
<rockets_technicalDetails ref="technicalDetails" :rocketsData="this.chosenRocketData"/>
<rockets_rocketGraphic ref="rocketGraphic" :rocketsData="this.$store.state.rockets"/>
</div>

</template>

<script>
import rockets_technicalDetails from '@/components/rockets/rockets_technicalDetails.vue';
import rockets_rocketSelector from '@/components/rockets/rockets_rocketSelector.vue';
import rockets_rocketGraphic from '@/components/rockets/rockets_rocketGraphic.vue';
import rockets_generalInfo from '@/components/rockets/rockets_generalInfo.vue';

export default {
  name: 'rockets',
  data() {
    return {
      chosenRocketData: undefined,
    }
  },
  components: {
    rockets_technicalDetails,
    rockets_rocketSelector,
    rockets_rocketGraphic,
    rockets_generalInfo,
  },
  methods: {
    retrieveStoreData() {
      this.rocketsData = this.$store.state.rockets
      console.log(this.rocketsData)
    },
  //   filterRockets(rocketName) {
  //   this.selectedRocket = this.rocketsData.filter((rocket_name) => {
  //     return rocketName == "Falcon 1";
  //     console.log(this.selectedRocket)
  //   })
  // },
     filterRockets(rocket) {
        this.chosenRocketData = this.$store.state.rockets.filter(oneRocket => oneRocket.rocket_name == rocket),
        console.log(this.chosenRocketData)
    },
    
  },
  created() {
    this.retrieveStoreData()
  },
}

</script>

