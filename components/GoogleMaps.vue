<template>
    <GMap
    class="google-maps"
    :cluster="{options: {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}}" 
    :center="{lat: location.lat, lng: location.lng}"
    :options="{fullscreenControl: true, streetViewControl: true, mapTypeControl: true, zoomControl: true, gestureHandling: 'cooperative'}"
    :zoom="15">
    <GMapMarker
        :position="{lat: location.lat, lng: location.lng}"
        @click="currentLocation = location">
        <GMapInfoWindow>
            <code>
                lat: {{ location.lat }},
                lng: {{ location.lng }}
            </code>
        </GMapInfoWindow>
    </GMapMarker>
</GMap>
</template>

<script>
export default {
    data(){
  return{
    location: {
        lat: 43.269223,
        lng: 76.954001
    },
    pins: {
        selected: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB...',
        notSelected: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAM...'
    },

    currentLocation: {
        lat: 43.269223,
        lng: 76.954001
    }
  }
}
}
</script>