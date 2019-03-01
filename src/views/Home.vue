<template>
  <div class="viewContainer">
    <shared_UserInfo @logoutClicked="runLogout()" />
    <shared_Header />
    <shared_NavBar />
    <div class="componentContainer">
      <H1>HOME</H1>
    </div>
  </div>
</template>

<script>
import store from '../store'
import shared_NavBar from '@/components/shared/shared_NavBar.vue';
import shared_UserInfo from '@/components/shared/shared_UserInfo.vue';
import shared_Header from '@/components/shared/shared_Header.vue';

export default {
  name: 'home',
  computed: {},
  components: {
    shared_NavBar,
    shared_UserInfo,
    shared_Header
  },
  methods: {
    runLogout() {
      this.$emit('logoutRunFunc')
    },
  },
  mounted() {
    if (this.$store.state.loggedIn == false) {
      this.$emit('redirectFunc')
    }
  },
}
</script>

<style scoped>

</style>

