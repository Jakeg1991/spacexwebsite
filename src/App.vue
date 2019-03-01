<template>
  <v-app>
    <div class="body">
      <div class="fixed">
      </div>
      <router-view @loginRunFunc="login()" @logoutRunFunc="logout()" @redirectFunc="redirect()"/>
    </div>
  </v-app>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var config = {
  apiKey: "AIzaSyAeDJ0KU9ELqJv5Fe6FCeh4K0vRn0IZ1qs",
  authDomain: "spacexapplogin.firebaseapp.com",
  databaseURL: "https://spacexapplogin.firebaseio.com",
  projectId: "spacexapplogin",
  storageBucket: "spacexapplogin.appspot.com",
  messagingSenderId: "167057019693"
};
firebase.initializeApp(config);

export default {
  name: 'App',
  data() {
    return {
      loggedIn: false
    }
  },
  computed: {
    loggedInCompute() {
      return !this.$store.state.loggedIn
    },

    darkModeCompute() {
      return !this.$store.state.darkMode
    }
  },
  watch: {
    loggedInCompute(newCompute) {
      if (newCompute == true) {
        this.loggedIn = true
      } else {
        this.loggedIn = false
      }
    },
    darkModeCompute(newCompute) {
      if (newCompute == true) {
        this.darkMode(true)
      } else {
        this.darkMode(false)
      }
    },
  },
  methods: {
    darkModeInit() {
      if (this.$store.state.darkMode == true) {
        this.darkMode(true)
      } else {
        this.darkMode(false)
      }
    },
    login() {
      console.log("in login");
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log("Sign-in successful");
          this.$store.dispatch('setUserInfo', result.user)
          this.$store.dispatch('login')
          this.$router.push('/')
        })
        .catch(function (error) {
          alert("error" + error.message);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sign-out successful");
          this.$store.dispatch('logout');
          this.$router.push('/login')
        })
        .catch(function (error) {
          alert("alert logout");
        });
    },
    redirect() {
      // this.$router.push('/login')
    },
    darkMode(boonlean) {
      if (boonlean == false) {
        document.documentElement.style.setProperty('--bgcolor', '#e0e0e0')
        document.documentElement.style.setProperty('--fontcolor', '#303030')
        document.documentElement.style.setProperty('--utlitybarcolor', '#b4b4b4')
      } else {
        document.documentElement.style.setProperty('--bgcolor', '#303030')
        document.documentElement.style.setProperty('--fontcolor', '#e0e0e0')
        document.documentElement.style.setProperty('--utlitybarcolor', '#4e4e4e')
      }
    }
  },
  mounted() {
    this.darkModeInit()
    this.$store.dispatch('getLaunches')
    this.$store.dispatch('getRockets')
  },
}
</script>

<style>:root {
  --bgcolor: #e0e0e0;
  --fontcolor: #303030;
  --utlitybarcolor:  #b4b4b4;
}


.body {
  background-color: var(--bgcolor);
  -webkit-transition: background-image 3000ms ease-in-out;
  -moz-transition: background-image 3000ms ease-in-out;
  -o-transition: background-image 3000ms ease-in-out;
  transition: background-image 3000ms ease-in-out;
  color: var(--fontcolor);
  width: 100%;
  height: 100%;
}

.componentContainer {
  margin: 50px
}
</style>

