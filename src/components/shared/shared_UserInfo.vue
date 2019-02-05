<template>
<div>
    <v-switch :label="`Dark Mode`" v-on:change="changeDarkmode()" dark></v-switch>
    <p>logged in as: {{this.$store.state.userInfo.displayName}}</p>
    <p>email: {{this.$store.state.userInfo.email}}</p>
    <img class="avatar" v-bind:src="this. $store.state.userInfo.photoURL"/> 
    <button v-on:click="logout()"> Logout </button>
</div>
</template>

<script>
import firebase from "firebase/app";
export default {
    name: "shared_UserInfo",
    components: {},
    methods: {
        changeDarkmode() {
            this.$store.dispatch('changeDarkmode')
        },
        logout() {
            this.$emit('logoutClicked')
        }
    },
    data() {
        return {
        }
    },
    watch: {},
}
</script>

<style scoped>
.avatar{
    height: 50px;
    width: 50px;
}
</style>



