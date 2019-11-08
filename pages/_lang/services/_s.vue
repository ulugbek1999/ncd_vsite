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
        {{ t.services }}
      </div>
    </v-img>
    <v-container style="width: 80%">
      <div class="detail-page__item service-more">
        <div class="detail-item__image">
          <div class="detail-item__imagebg"></div>
          <div class="detail-item__image-on">
            <img :src="cms + services[index].image_new" width="480" />
          </div>
        </div>
        <div>
          <div v-if="lang == 'en'" class="display-2 desktop-s mb-5 header-main">
            {{ services[index].title_en }}
          </div>
          <div v-if="lang == 'en'" class="title mt-5 mobile-s mb-5 header-main">
            {{ services[index].title_en }}
          </div>
          <div v-if="lang == 'ru'" class="display-2 desktop-s mb-5 header-main">
            {{ services[index].title_ru }}
          </div>
          <div v-if="lang == 'ru'" class="title mt-5 mb-5 mobile-s header-main">
            {{ services[index].title_ru }}
          </div>
          <div v-if="lang == 'kz'" class="display-2 desktop-s mb-5 header-main">
            {{ services[index].title_kz }}
          </div>
          <div v-if="lang == 'kz'" class="title mt-5 mobile-s mb-5 header-main">
            {{ services[index].title_kz }}
          </div>
          <div v-if="lang == 'uz'" class="display-2 desktop-s mb-5 header-main">
            {{ services[index].title_uz }}
          </div>
          <div v-if="lang == 'uz'" class="title mt-5 mobile-s mb-5 header-main">
            {{ services[index].title_uz }}
          </div>
          <span v-if="lang == 'en'" v-html="services[index].content_en"></span>
          <span v-if="lang == 'ru'" v-html="services[index].content_ru"></span>
          <span v-if="lang == 'kz'" v-html="services[index].content_kz"></span>
          <span v-if="lang == 'uz'" v-html="services[index].content_uz"></span>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { CMS_DOMAIN, DICTIONARY } from "~/settings/settings";
export default {
  layout: "main",
  head() {
    return {
      title: "Services"
    };
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      services: state => state.cmsData.service,
      lang: state => state.lang
    }),
    index() {
      return this.$route.params.s;
    },
    cms() {
      return CMS_DOMAIN;
    },
    t() {
      return DICTIONARY[this.lang];
    }
  }
};
</script>
