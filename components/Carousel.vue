<template>
  <v-carousel
    cycle
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters=""
    >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.image"
    >
        <v-row
            class="fill-height"
            justify="center"
        >
            <div class="c-wrapper">
                <div class="display-3" v-if="slide.title[language]">{{ slide.title[language] }}</div>
                <div class="display-1" v-if="slide.subtitle[language]">{{ slide.subtitle[language] }}</div>
                <v-btn class="c-btn" v-if="slide.btnTitle[language]" light>{{ slide.btnTitle[language] }}</v-btn>
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
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],

        }
    },
    props: {
        slides: {
            type: Array
        },
        language: {
            type: String,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped src="~/assets/components/carousel.scss">

</style>