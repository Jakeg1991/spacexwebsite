<template>
  <v-app>
    <div class="body">
      <div class="fixed">
          <v-switch :label="`Space Mode`" v-model="darkmode" v-on:change="changeDarkmode()" dark></v-switch>
        <shared_Header />
        <shared_NavBar />
      </div>
      <router-view />
    </div>
  </v-app>
</template>
<script>
import shared_NavBar from '@/components/shared/shared_NavBar.vue';
import shared_Header from '@/components/shared/shared_Header.vue';

export default {
  name: 'App',
  components: {
    shared_NavBar,
    shared_Header,
  },
  computed: {
    darkModeCompute() {
      return !this.$store.state.darkMode
    }
  },
  watch: {
    darkModeCompute(newCompute, oldCompute) {
      if (newCompute == true) {
        document.documentElement.style.setProperty('--bgcolor', '#303030')
        document.documentElement.style.setProperty('--fontcolor', '#e0e0e0')
      } else {
        document.documentElement.style.setProperty('--bgcolor', '#e0e0e0')
        document.documentElement.style.setProperty('--fontcolor', '#303030')
      }
    }
  },
  methods: {
    retrieveStoreData() {
      this.darkMode = this.$store.state.darkMode
    },
    changeDarkmode() {
      this.$store.dispatch('changeDarkmode')
    }
  },
  data() {
    return {
      darkMode : undefined
    }
  },
  created() {
    this.$store.dispatch('getLaunches')
    this.$store.dispatch('getRockets')
    this.retrieveStoreData()
  },
}
</script>

<style>
:root {
  --bgcolor: #e0e0e0;
  --fontcolor: #303030;
}


.body{
  background-color: var(--bgcolor);
  color: var(--fontcolor);
  width: 100%;
  height: 100%;
}

.componentContainer{
  margin: 50px
}
</style>

