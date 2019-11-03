<template>
    <div>
        <v-img 
          :src="cms + service.image_new"
          height="300px"
        ></v-img>
        <div class="service-info text-left pt-5 pl-5 pb-5 pr-5">
            <div class="service-widget-header mb-3">{{title}}</div>
            <div class="service-widget-content" v-html="short_content"></div>
        </div>
    </div>
</template>

<script>
import {CMS_DOMAIN} from "~/settings/settings"
export default {
    props: {
        service: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            lang: this.$route.params.lang
        }
    },
    computed: {
        title() {
            if (this.lang == "ru") {
                return this.service.title_ru
            }
            else if (this.lang == "en") {
                return this.service.title_en
            }
            else if (this.lang == "kz") {
                return this.service.title_kz
            }
            else {
                return this.service.title_uz
            }
        },
        short_content() {
            if (this.lang == "ru") {
                return this.service.short_content_ru
            }
            else if (this.lang == "en") {
                return this.service.short_content_en
            }
            else if (this.lang == "kz") {
                return this.service.short_content_kz
            }
            else {
                return this.service.short_content_uz
            }
        },
        cms() {
            return CMS_DOMAIN
        }
    }
}
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>