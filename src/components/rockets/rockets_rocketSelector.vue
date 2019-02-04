<template>
    <div class="componentContainer">
        <H2>ROCKET SELECTOR</H2>
        <v-select :items="allRockets" solo dense v-model="currentSelectedRocket"
            v-on:input="changeSelectedRocket()"></v-select>
    </div>
</template>

<script>
export default {
    name: "rockets_rocketSelector",
    props: ['rocketsData'],
    data() {
        return {
            currentSelectedRocket: "Falcon 1",
            allRockets: ["Falcon 1","Falcon 9","Falcon Heavy","Big Falcon Rocket"]
        }
    },
    components: {},
    methods: {
        changeSelectedRocket() {
            console.log(this.currentSelectedRocket)
            this.$parent.filterRockets(this.currentSelectedRocket)

        }
    },
    mounted(){
this.changeSelectedRocket()
    },
}
</script>

<style>

</style>


