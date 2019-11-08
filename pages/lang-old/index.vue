<template>
  <v-layout column justify-center align-center>
    <v-card light="" class="page" width="90%">
      <h2>{{ translation.about_company }}</h2>
      <v-row class="about">
        <v-col cols="12" lg="5" md="5" class="text-right">
          <v-img
            :src="require('~/static/pages/logo-sec.png')"
            height="400px"
            contain
            position="right"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="1" md="1">
          <v-item-group class="divider"> </v-item-group>
        </v-col>
        <v-col cols="12" lg="5" md="5" class="text-left" align-self="center">
          <p v-html="about"></p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-img
          :src="require('~/static/pages/image.png')"
          max-width="95%"
        ></v-img>
      </v-row>
      <v-img
        :src="require('~/static/icons/goal.png')"
        max-width="40%"
        contain
        class="mx-auto mb-5"
      ></v-img>
      <v-row justify="center">
        <div class="mss-wrapper mt-10 mb-10">
          <p v-html="mss"></p>
        </div>
      </v-row>
      <v-row class="mission mt-10" justify="center" align="center">
        <v-col cols="12" lg="6" md="6">
          <div class="mission-text">
            <h2>{{ translation.our_mission }}</h2>
            <p v-html="mission"></p>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6">
          <v-img
            :src="require('~/static/icons/peace.png')"
            max-width="40%"
            class="mx-auto"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="6" md="6">
          <v-img
            class="mx-auto mt-10"
            :src="require('~/static/icons/win.png')"
            max-width="40%"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="6" md="6">
          <div class="collab-wrapper">
            <h2>{{ translation.cooperation }}</h2>
            <p v-html="cooperation"></p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { async } from "q";
import { mapState, mapGetters } from "vuex";
import { DICTIONARY } from "~/settings/settings.js";

export default {
  layout: "old",
  components: {
    Logo,
    VuetifyLogo
  },
  head() {
    return {
      title: "Homepage"
    };
  },
  computed: {
    ...mapState({
      cms: state => state.cmsData
    }),
    language() {
      return this.$route.params.lang;
    },
    about() {
      if (this.language == "ru") {
        return this.cms.about[0].content_ru;
      } else if (this.language == "en") {
        return this.cms.about[0].content_en;
      } else if (this.language == "uz") {
        return this.cms.about[0].content_uz;
      } else {
        return this.cms.about[0].content_kz;
      }
    },
    mss() {
      if (this.language == "ru") {
        return this.cms.about[2].content_ru;
      } else if (this.language == "en") {
        return this.cms.about[2].content_en;
      } else if (this.language == "uz") {
        return this.cms.about[2].content_uz;
      } else {
        return this.cms.about[2].content_kz;
      }
    },
    mission() {
      if (this.language == "ru") {
        return this.cms.about[1].content_ru;
      } else if (this.language == "en") {
        return this.cms.about[1].content_en;
      } else if (this.language == "uz") {
        return this.cms.about[1].content_uz;
      } else {
        return this.cms.about[1].content_kz;
      }
    },
    cooperation() {
      if (this.language == "ru") {
        return this.cms.about[3].content_ru;
      } else if (this.language == "en") {
        return this.cms.about[3].content_en;
      } else if (this.language == "uz") {
        return this.cms.about[3].content_uz;
      } else {
        return this.cms.about[3].content_kz;
      }
    },
    translation() {
      return DICTIONARY[this.language];
    }
  }
};
</script>
