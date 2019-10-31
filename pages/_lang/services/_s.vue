<template>
    <div>
        <v-img
          style="background-color: #000"
          :src="require('~/static/pages/service.jpg')"
          height="80vh"
          class="mb-12"
        >
            <div 
              class="display-2 white--text text-center font-weight-bold"
              style="margin-top: 35vh;"
              data-aos="fade"
              data-aos-once="true"
              data-aos-duration="2000"
            >
                Услуги
            </div>
        </v-img>
        <v-container style="width: 80%">
            <div
              class="detail-page__item service-more"
            >
                <div
                    class="detail-item__image"
                >
                    <div class="detail-item__imagebg"></div>
                    <div class="detail-item__image-on">
                        <img
                            :src="services[index].image"
                            width="480"
                        >
                    </div>
                </div>
                    <div>
                    <div class="display-2 desktop-s mb-5 header-main" v-if="lang == 'en'">{{ services[index].title }}</div>
                    <div class="title mt-5 mobile-s mb-5 header-main" v-if="lang == 'en'">{{ services[index].title }}</div>
                    <div class="display-2 desktop-s mb-5 header-main" v-if="lang == 'ru'">{{ services[index].title }}</div>
                    <div class="title mt-5 mb-5 mobile-s header-main" v-if="lang == 'ru'">{{ services[index].title }}</div>
                    <div class="display-2 desktop-s mb-5 header-main" v-if="lang == 'kz'">{{ services[index].title }}</div>
                    <div class="title mt-5 mobile-s mb-5 header-main" v-if="lang == 'kz'">{{ services[index].title }}</div>
                    <div class="display-2 desktop-s mb-5 header-main" v-if="lang == 'uz'">{{ services[index].title }}</div>
                    <div class="title mt-5 mobile-s mb-5 header-main" v-if="lang == 'uz'">{{ services[index].title }}</div>
                    <span v-if="lang == 'en'" v-html="cmsData.service[index].content_en"></span>
                    <span v-if="lang == 'ru'" v-html="cms.service[index].content_ru"></span>
                    <span v-if="lang == 'kz'" v-html="cms.service[index].content_kz"></span>
                    <span v-if="lang == 'uz'" v-html="cms.service[index].content_uz"></span>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    layout: 'main',
    head() {
        return {
            title: "Services"
        }
    },
    data() {
        return {
            lang: this.$route.params.lang,
        }
    },
    computed: {
        ...mapState({
            services: state => state.services,
            cms: state => state.cmsData
        }),
        index() {
            return this.$route.params.s
        }
    }
}
</script>