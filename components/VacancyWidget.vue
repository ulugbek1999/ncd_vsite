<template>
    <div class="vacancy-widget">
        <v-img
          :src="cms + vacancy.image"
          height="200px"
        >
        </v-img>
        <div class="title mt-2 mb-2">{{ title }}</div>
        <div class="subtitle-1 mb-2">{{ location }}</div>
        <div class="subtitle-2 mb-2">{{ wages }}</div>
        <v-btn
          class="mt-2 mb-10"
          outlined
          color="#be993e"
          :to="{name: 'lang-vacancy-v', params: {v: index}}"
        >
            {{t.read_more}}
        </v-btn>
    </div>
</template>

<script>
import {CMS_DOMAIN, DICTIONARY} from '~/settings/settings'
export default {
    props: {
        vacancy: {
            type: Object,
            required: true
        },
        index: Number
    },
    computed: {
        cms() {
            return CMS_DOMAIN
        },
        lang() {
            return this.$route.params.lang
        },
        title() {
            if (this.lang == "ru") {
                return this.vacancy.title_ru
            }
            else if(this.lang == "en") {
                return this.vacancy.title_en
            }
            else if(this.lang == "kz") {
                return this.vacancy.title_kz
            }
            else {
                return this.vacancy.title_uz
            }
        },
        location() {
            if (this.lang == "ru") {
                return this.vacancy.location_ru
            }
            else if(this.lang == "en") {
                return this.vacancy.location_en
            }
            else if(this.lang == "kz") {
                return this.vacancy.location_kz
            }
            else {
                return this.vacancy.location_uz
            }
        },
        wages() {
            if (this.lang == "ru") {
                return this.vacancy.wages_ru
            }
            else if(this.lang == "en") {
                return this.vacancy.wages_en
            }
            else if(this.lang == "kz") {
                return this.vacancy.wages_kz
            }
            else {
                return this.vacancy.wages_uz
            }
        },
        t() {
            return DICTIONARY[this.lang]
        }
    }
}
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>