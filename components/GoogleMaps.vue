<template>
    <GMap
    class="google-maps"
    :center="{lat: location.lat, lng: location.lng}"
    map-type-id="terrain"
    :zoom="7">
    <GMapMarker
        :position="{lat: location.lat, lng: location.lng}"
        @click="currentLocation = location">
    </GMapMarker>
</GMap>
</template>

<script>
export default {
    data(){
        return {
            location: {
                lat: 43.269223,
                lng: 76.954001
            }
        } 
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.test = true
            })
        })
    }
}
</script>