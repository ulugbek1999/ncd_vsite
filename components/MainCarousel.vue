<template>
  <v-carousel height="100vh" cycle interval="15000">
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="'slide-' + i"
      :src="slide.image"
      transition="fade-transition"
      reverse-transition="fade-transition"
    >
      <v-row class="fill-height" align="center" justify="center">
        <div class="text-center">
          <div v-if="i === 0" class="titles-desktop">
            <div
              class="display-3 slide-title font-weight-bold"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="1000"
              data-aos-once="true"
              style="color: #fff"
            >
              {{ slide.title }}
            </div>
            <div
              class="display-1 slide-subtitle font-weight-bold"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="2000"
              data-aos-once="true"
              style="color: #fff; margin-top: 20px;"
            >
              {{ slide.subtitle }}
            </div>
          </div>
          <div v-else class="titles-desktop">
            <div
              class="display-3 slide-title font-weight-bold"
              style="color: #fff"
            >
              {{ slide.title }}
            </div>
            <div
              class="display-1 slide-subtitle font-weight-bold"
              style="color: #fff; margin-top: 20px;"
            >
              {{ slide.subtitle }}
            </div>
          </div>
          <div class="titles-mobile">
            <div class="slide-title">{{ slide.title }}</div>
            <div class="slide-subtitle">{{ slide.subtitle }}</div>
          </div>
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      colors: [
        require("~/static/pages/slider-1.jpg"),
        require("~/static/pages/slider-2.jpg")
      ]
    };
  }
};
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>
