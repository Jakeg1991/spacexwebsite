<template>
<v-layout align-center justify-center row class="utlityBar">
    <v-flex class="darkmodeSwitch">
        <v-switch :label="`Dark Mode`" v-on:change="changeDarkmode()" v-model="darkmode" dark></v-switch>
    </v-flex>
    <v-layout align-center justify-center row fill-height>
        <img class="avatar" v-bind:src="this.$store.state.userInfo.photoURL" />
        <v-flex>
            logged in as: {{this.$store.state.userInfo.displayName}}
            darkmode {{darkmode}}
        </v-flex>
        <v-btn small v-on:click="logout()"> Logout </v-btn>
    </v-layout>
</v-layout>
</template>

<script>
import firebase from "firebase/app";
export default {
    name: "shared_UserInfo",
    data() {
        return {}
    },
    components: {},
    methods: {
        changeDarkmode() {
            this.$store.dispatch('changeDarkmode')
        },
        logout() {
            this.$emit('logoutClicked')
        }
    },
    computed: {
        darkmode() {
            return !this.$store.state.darkMode
        }
    },
    mounted() {
        this.darkMode = this.$store.state.darkmode
        console.log(this.$store.state.darkmode)
    }
}
</script>

<style scoped>
.darkmodeSwitch{
    margin: auto auto auto 10px
}

.userInfo{
    display: flex;
    flex-flow: row;
    align-items: center
}
.utilityBar{
    background-color:var(--utlitybarcolor);

}
.avatar{
    margin: 5px;
    height: 40px;
    width: 40px;
    border-style: solid;
    border-width: 1px;
}
</style>



