<template>
    <carousel
      :autoplay="true"
      :nav="false"
      :dots="false"
      :items="1"
      class="partners-carousel"
      :margin="4"
      :is="owlComp"
      :loop="true"
      :responsiveClass="true"
      :responsive="responsive"
    >
        <div class="item" v-for="(partner, index) in partners" :key="'partner-' + index">
            <div class="partners-item">
                <a href="#">
                    <img
                      :src="partner.image"
                      class="mx-auto"
                    />
                    <span>{{partner.title}}</span>
                </a>
            </div>
        </div>
    </carousel>
</template>

<script>
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default {
    data () {
        return {
            'owlComp': '',
            responsive: {
                996: {
                    items: 3,
                    margin: 20,
                    center: true
                },
                768: {
                    items: 2
                }
            }
        }
    },
    methods: {
        next() {
            this.$refs.slick.next()
        },
        prev() {
            this.$refs.slick.next()
        },
        reInit() {
            this.$nextTick(() => {
                this.$refs.slick.resSlick()
            })
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.owlComp = 'Carousel'
        })
    },
    components: {
        Carousel: () => import('vue-owl-carousel')
    },
    props: {
        partners: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    .slick-next {
        display: none !important;
    }
    .slick-arrow {
        display: none !important;
    }
</style>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>

