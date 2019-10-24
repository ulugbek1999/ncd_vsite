<template>
    <gmap-map
      class="google-maps"
      :center="{lat: location.lat, lng: location.lng}"
      map-type-id="terrain"
      :zoom="15"
      style="height: 400px; width: 100%"
    >
    <gmap-marker
        :position="{lat: location.lat, lng: location.lng}"
        @click="currentLocation = location">
    </gmap-marker>
</gmap-map>
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