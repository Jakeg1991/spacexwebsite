<template>
    <div class="componentContainer">
        <H2>ROCKET GRAPHIC</H2>
        <div class="rocketGraphic" :style="getRocketGraphic"></div>
    </div>
</template>

<script>
export default {
  name: "rockets_rocketGraphic",
  props: ['rocketsData'],
  components: {
  },
  computed: {
        getRocketGraphic() {
            return {
                'background-image': `url(${"https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2009_-_01_liftoff_south_full_wide_ro8a1280_edit.jpg?itok=8loiSGt1"})`,
            }
        },}}
</script>

<style scoped>
.rocketGraphic{
    height: 800px;
    width: 500px;
    background-color: blue;
  background-position: center; 
}
</style>



