<template>
    <div class=header :style="headerImgCompute">
        <h1>SPACEX</h1>
    </div>
</template>

<script>
export default {
    name: "shared_Header",
    components: {},
    computed: {
        darkModeCompute() {
            return !this.$store.state.darkMode
        },
        headerImgCompute() {
            return {
                'background-image': `url(${this.header})`
            }
        }
    },
    data() {
        return {
            header: 'https://img.purch.com/h/1400/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA4Mi82NjAvb3JpZ2luYWwvc3BhY2V4LWZhbGNvbi1oZWF2eS1sYXVuY2gtZGVidXQuanBn',
            lightHeader: 'https://img.purch.com/h/1400/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA4Mi82NjAvb3JpZ2luYWwvc3BhY2V4LWZhbGNvbi1oZWF2eS1sYXVuY2gtZGVidXQuanBn',
            darkHeader:
            'http://www.williamloughran.co.uk/media/4868/telsa-roadster-in-deep-space-2.jpg'
                //   '../../assets/headerBG_light.jpg'
        }
    },

    watch: {
        darkModeCompute(newCompute, oldCompute) {
            if (newCompute == true) {
                console.log(this.header)
                this.header = this.darkHeader
            } else {
                console.log(this.header)
                this.header = this.lightHeader
            }
        }
    },
}

</script>

<style scoped>
.header{
    width: 100%;
    height: 400px;
    background-position: center;
    background-size: cover;
    /* background-image: url("../../assets/headerBG_dark.jpg"); */
    text-align: center;
    vertical-align: middle;
}
</style>



