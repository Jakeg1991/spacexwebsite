<template>
<div class="viewContainer">
  <shared_UserInfo @logoutClicked="runLogout()"/>
  <shared_Header />
  <shared_NavBar />
<div class="componentContainer">
  <div class="rocketHeaderContainer">
  <h1>ROCKETS</h1>
  </div>
<rockets_rocketSelector ref="rocketSelector" :rocketsData="this.$store.state.rockets"/>
<rockets_generalInfo ref="generalInfo" :rocketsData="this.chosenRocketData"/>
<rockets_technicalDetails ref="technicalDetails" :rocketsData="this.chosenRocketData"/>
<rockets_rocketGraphic ref="rocketGraphic" :rocketsData="this.$store.state.rockets"/>
</div>
</div>

</template>

<script>
import shared_NavBar from '@/components/shared/shared_NavBar.vue';
import shared_UserInfo from '@/components/shared/shared_UserInfo.vue';
import shared_Header from '@/components/shared/shared_Header.vue';
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
    shared_NavBar,
    shared_UserInfo,
    shared_Header
  },
  methods: {
    redirectPage() {
      if (this.$store.state.loggedIn == false) {
        this.$emit('redirectFunc')
      }
    },
    runLogout() {
      this.$emit('logoutRunFunc')
    },

    retrieveStoreData() {
      this.rocketsData = this.$store.state.rockets
    },
    filterRockets(rocket) {
      this.chosenRocketData = this.$store.state.rockets.filter(oneRocket => oneRocket.rocket_name == rocket)
    },
  },
  created() {
    this.retrieveStoreData()
  },
  mounted() {
    this.redirectPage()
  }
}
</script>

<style scoped>
.rocketHeaderContainer{
  margin: 50px
}
</style>


