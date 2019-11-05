<template>
  <gmap-map
    class="google-maps"
    :center="{ lat: location.lat, lng: location.lng }"
    map-type-id="terrain"
    :zoom="15"
    style="height: 400px; width: 100%"
  >
    <gmap-marker
      :position="{ lat: location.lat, lng: location.lng }"
      @click="currentLocation = location"
    >
    </gmap-marker>
  </gmap-map>
</template>

<script>
export default {
  props: {
    locationStr: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    location() {
      var locArray = this.locationStr.split(";");
      return {
        lat: parseFloat(locArray[0]),
        lng: parseFloat(locArray[1])
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.test = true;
      });
    });
  }
};
</script>
