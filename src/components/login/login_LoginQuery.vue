<template>
<div class="componentContainer">
        <p class="chatWelcomeText">Please Login with a Google account to continue.</p>
        <div class="buttonWrapper">
          <button v-on:click="login()"> Login </button>
      </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default {
  name: "login_LoginQuery",
      components: {
      },
      data() {
          return {};
      },
      methods: {
          login() {
              this.$emit("loginClicked")
          },
      }
      }
</script>

