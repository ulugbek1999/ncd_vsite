<template>
  <v-carousel 
     height="100vh"
     cycle
     interval="15000"
    >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="'slide-' + i"
      :src="slide.image"
      transition="fade-transition"
      reverse-transition="fade-transition"
    >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        <div class="text-center">
          <div class="titles-desktop">
            <div class="display-3 slide-title">{{slide.title}}</div>
            <div class="display-1 slide-subtitle">{{slide.subtitle}}</div>
          </div>
          <div class="titles-mobile">
            <div class="slide-title">{{slide.title}}</div>
            <div class="slide-subtitle">{{slide.subtitle}}</div>
          </div>
            
        </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          require('~/static/pages/slider-1.jpg'),
          require('~/static/pages/slider-2.jpg'),
        ],
      }
    },
    props: {
        slides: {
            type: Array,
            required: true
        }
    }
  }
</script>

<style lang="scss" scoped src="~/assets/components/carousel.scss"></style>