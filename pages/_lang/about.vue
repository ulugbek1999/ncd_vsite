<template>
    <div>
        <v-img
          style="background-color: #000"
          :src="require('~/static/pages/about-us.jpg')"
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
                О компании
            </div>
        </v-img>
        <v-container
          style="width: 80%"
        >
        <section class="about-more-container">
            <div
              v-for="(about, index) in abouts"
              :key="'about-more-' + index"
              :class="'about-more-' + index"
              class="about-page__item"
            >
                <div v-if="index % 2 != 0" style="clear: both; display: table">
                    <div
                      class="about-item__image" v-if="index % 2 != 0"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-once="true"
                    >
                        <div class="about-item__imagebg"></div>
                        <div class="about-item__image-on">
                            <img
                                v-if="about.image == null"
                                src="https://uzncd.com/media/cache/59/e3/59e3f04eaafc07d6879d2c6256826ad1.jpg"
                                alt="image"
                                width="480"
                            >
                            <img
                                v-else
                                :src="cms + about.image"
                                :alt="about.title_en"
                                width="480"
                            >
                        </div>
                    </div>
                    <div
                      
                      v-if="index % 2 != 0"
                    >
                        <div class="display-2 mb-5 header-main" v-if="lang == 'en'">{{ about.title_en }}</div>
                        <div class="display-2 mb-5 header-main" v-if="lang == 'ru'">{{ about.title_ru }}</div>
                        <div class="display-2 mb-5 header-main" v-if="lang == 'kz'">{{ about.title_kz }}</div>
                        <div class="display-2 mb-5 header-main" v-if="lang == 'uz'">{{ about.title_uz }}</div>
                        <span v-if="lang == 'en'" v-html="about.content_en"></span>
                        <span v-if="lang == 'ru'" v-html="about.content_ru"></span>
                        <span v-if="lang == 'kz'" v-html="about.content_kz"></span>
                        <span v-if="lang == 'uz'" v-html="about.content_uz"></span>
                    </div>
                    
                </div>
                <div
                    v-if="index % 2 == 0"
                >
                    <div
                      class="about-item__image"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-once="true"
                    >
                        <div class="about-item__imagebg"></div>
                        <div class="about-item__image-on">
                            <img
                                v-if="about.image == null"
                                src="https://uzncd.com/media/cache/59/e3/59e3f04eaafc07d6879d2c6256826ad1.jpg"
                                alt="image"
                                width="480"
                            >
                            <img
                                v-else
                                :src="cms + about.image"
                                :alt="about.title_en"
                                width="480"
                            >
                        </div>
                    </div>
                </div>
                <div
                  v-if="index % 2 == 0"
                >
                    <div class="display-2 mb-5 header-main" v-if="lang == 'en'">{{ about.title_en }}</div>
                    <div class="display-2 mb-5 header-main" v-if="lang == 'ru'">{{ about.title_ru }}</div>
                    <div class="display-2 mb-5 header-main" v-if="lang == 'kz'">{{ about.title_kz }}</div>
                    <div class="display-2 mb-5 header-main" v-if="lang == 'uz'">{{ about.title_uz }}</div>
                    <div v-if="lang == 'en'" v-html="about.content_en"></div>
                    <div v-if="lang == 'ru'" v-html="about.content_ru"></div>
                    <div v-if="lang == 'kz'" v-html="about.content_kz"></div>
                    <div v-if="lang == 'uz'" v-html="about.content_uz"></div>
                </div>
            </div>
        </section>
            
        </v-container>
    </div>
</template>

<script>
import {CMS_DOMAIN} from "~/settings/settings"

export default {
    layout: "main",
    head() {
        return {
            title: "About"
        }
    },
    components: {

    },
    data() {
        return {
            lang: this.$route.params.lang,
            cms: CMS_DOMAIN
        }
    },
    computed: {
        abouts() {
            return this.$store.state.cmsData.about
        }
    },
    mounted () {
        this.$nextTick(() => {
            console.log(this.cms)
        })
    }
}
</script>