<template>
  <v-app id="main" style="height: 1200px;">
    <v-container>
      <v-row class="nav-desktop">
        <v-col cols="12" lg="4" md="4" sm="4" align-self="center">
          <v-item-group class="auth-container">
            <v-badge class="link" style="margin-right: 10px;">{{
              translation.login
            }}</v-badge>
            <v-badge class="link">{{ translation.registration }}</v-badge>
          </v-item-group>
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="4">
          <v-img
            :src="require('~/static/layout/logo.png')"
            aspect-ratio="0.5"
            position="center"
            contain
            max-width="500px"
            max-height="80px"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="4" align-self="center">
          <v-item-group class="lang-change">
            <span
              v-for="(lang, index) in languages"
              :key="'lang-desktop-' + index"
              class="link"
              :data-lang="lang"
              @click="changeLang"
              >{{ lang }}</span
            >
          </v-item-group>
        </v-col>
      </v-row>
      <v-row justify="space-around" class="nav-desktop">
        <v-badge
          v-for="(n, i) in navItems"
          :key="'nav-item-desktop-' + i"
          class="link"
          >{{ n.name }}</v-badge
        >
      </v-row>
      <v-row class="nav-mobile">
        <div>
          <v-app-bar color="#be993e" dark>
            <v-app-bar-nav-icon
              class="mobile-navigator-lines"
              @click="sideMenuToggle"
            ></v-app-bar-nav-icon>

            <v-toolbar-title>NCD | International</v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-menu left bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon class="lang-selector" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list style="left: 10px;">
                <v-list-item
                  v-for="n in languages"
                  :key="n"
                  class="mobile-lang"
                  :data-lang="n"
                  @click="changeLang"
                >
                  <v-list-item-title>{{ n }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
        </div>
      </v-row>
    </v-container>
    <v-row>
      <Carousel :slides="slides" :language="language" />
    </v-row>
    <nuxt />
    <div v-show="activeSideMenu" class="side-menu-overlay">
      <div id="side" class="side-menu">
        <div class="close-btn" @click="sideMenuToggle">&times;</div>
        <div class="nav-list">
          <ul>
            <li v-for="(l, i) in navItems" :key="'nav-mobile-item-' + i">
              {{ l.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <v-footer class="footer" style="padding: 0" color="rgb(255, 255, 255)">
      <v-img
        width="100%"
        :src="require('~/static/layout/footer.png')"
        position="top center"
        max-height="1450px"
      >
        <div class="footer-info">
          <h2>{{ translation.our_services }}</h2>
        </div>

        <!-- "Our services (russian version)" -->
        <v-row v-if="language == 'ru'" class="services-container mx-auto mb-10">
          <v-col
            v-for="(service, index) in services"
            :key="'service-' + index"
            cols="12"
            lg="3"
            md="3"
          >
            <div class="service-container">
              <div class="service-image-container">
                <img
                  :src="domain + service.image"
                  alt=""
                  class="service-image mx-auto"
                />
              </div>
              <h4 class="service-header">
                {{ service.title_ru }}
              </h4>
              <p class="service-content" v-html="service.short_content_ru"></p>
            </div>
          </v-col>
        </v-row>

        <!-- "Our services (english version)" -->
        <v-row v-if="language == 'en'" class="services-container mx-auto mb-10">
          <v-col
            v-for="(service, index) in services"
            :key="'service-' + index"
            cols="12"
            lg="3"
            md="3"
          >
            <div class="service-container">
              <div class="service-image-container">
                <img
                  :src="domain + service.image"
                  alt=""
                  class="service-image mx-auto"
                />
              </div>
              <h4 class="service-header">
                {{ service.title_en }}
              </h4>
              <p class="service-content" v-html="service.short_content_en"></p>
            </div>
          </v-col>
        </v-row>

        <!-- "Our services (kazakh version)" -->
        <v-row v-if="language == 'kz'" class="services-container mx-auto mb-10">
          <v-col
            v-for="(service, index) in services"
            :key="'service-' + index"
            cols="12"
            lg="3"
            md="3"
          >
            <div class="service-container">
              <div class="service-image-container">
                <img
                  :src="domain + service.image"
                  alt=""
                  class="service-image mx-auto"
                />
              </div>
              <h4 class="service-header">
                {{ service.title_kz }}
              </h4>
              <p class="service-content" v-html="service.short_content_kz"></p>
            </div>
          </v-col>
        </v-row>

        <!-- "Our services (russian version)" -->
        <v-row v-if="language == 'uz'" class="services-container mx-auto mb-10">
          <v-col
            v-for="(service, index) in services"
            :key="'service-' + index"
            cols="12"
            lg="3"
            md="3"
          >
            <div class="service-container">
              <div class="service-image-container">
                <img
                  :src="domain + service.image"
                  alt=""
                  class="service-image mx-auto"
                />
              </div>
              <h4 class="service-header">
                {{ service.title_uz }}
              </h4>
              <p class="service-content" v-html="service.short_content_uz"></p>
            </div>
          </v-col>
        </v-row>

        <v-row justify="space-around" class="copyright-container">
          <div class="logo-footer-container">
            <img id="logo-footer" src="~/static/logo_login.svg" alt="Logo" />
            <p class="mt-5">&copy; {{ translation.copyright }}</p>
          </div>
          <div class="contacts">
            <h3 class="contacts-header">{{ translation.contacts }}</h3>
            <p>Алматы, Мухамеджанова 9</p>
            <p>+7 707 0202549</p>
            <p>+7 707 0202549</p>
            <p>+7 707 0202549</p>
          </div>
        </v-row>
      </v-img>
    </v-footer>
  </v-app>
</template>

<script>
import Carousel from "~/components/Carousel.vue";
import { CMS_DOMAIN, DICTIONARY } from "~/settings/settings.js";

export default {
  middleware: "language",
  components: {
    Carousel
  },
  data() {
    return {
      navItems: [],
      // services: [
      //   {
      //     imageUrl: require("~/static/icons/client.png"),
      //     title: "Бесплатная консультация",
      //     description: "Мы ответим на все интересующие вас вопросы"
      //   },
      //   {
      //     imageUrl: require("~/static/icons/folder.png"),
      //     title: "База данных соискателей",
      //     description: "Структурированные данные и быстрый поиск"
      //   },
      //   {
      //     imageUrl: require("~/static/icons/user.png"),
      //     title: "Профиль соискателей",
      //     description: "Личная карточка для оценки квалификации"
      //   },
      //   {
      //     imageUrl: require("~/static/icons/contract.png"),
      //     title: "Содействие в получении визы",
      //     description: "Консультации по визовым вопросам"
      //   },
      // ],
      languages: ["ru", "en", "kz", "uz"],
      activeSideMenu: false
    };
  },
  computed: {
    language() {
      return this.$route.params.lang;
    },
    slider() {
      return this.$store.state.cmsData.slider;
    },
    slides: {
      get() {
        return this.$store.state.slides;
      },
      set() {
        // this.$store.commit("RESET_SLIDER", array)
      }
    },
    translation() {
      return DICTIONARY[this.language];
    },
    services() {
      return this.$store.state.cmsData.service;
    },
    domain() {
      return CMS_DOMAIN;
    }
  },
  created() {
    this.slidesHandler();
  },
  mounted() {
    this.$nextTick(() => {
      this.navLang();
    });
  },
  methods: {
    sideMenuToggle() {
      if (!this.activeSideMenu) {
        this.activeSideMenu = true;
        setTimeout(() => {
          document.querySelector("#side").style.transform = "translateX(300px)";
        }, 700);
      } else {
        document.querySelector("#side").style.transform = "translateX(0px)";
        setTimeout(() => {
          this.activeSideMenu = false;
        }, 700);
      }
    },
    changeLang(event) {
      this.$router.replace({
        name: this.$route.name,
        params: { lang: event.target.dataset.lang }
      });
      setTimeout(() => {
        this.navLang();
      }, 200);
    },
    navLang() {
      this.navItems = [
        {
          name: this.translation.vacancies
        },
        {
          name: this.translation.about_company
        },
        {
          name: this.translation.services
        },
        {
          name: this.translation.documents
        },
        {
          name: this.translation.partners
        },
        {
          name: this.translation.education
        },
        {
          name: this.translation.faq
        },
        {
          name: this.translation.contacts
        }
      ];
    },
    slidesHandler() {
      /* Push objects to the "slides" data, 
      according to the language in the "lang" param */
      if (this.slides.length == 0) {
        if (this.slider.length != 0) {
          for (const slide of this.slider) {
            this.slides.push({
              image: CMS_DOMAIN + slide.image,
              title: {
                ru: slide.title_ru,
                en: slide.title_en,
                kz: slide.title_kz,
                uz: slide.title_uz
              },
              subtitle: {
                ru: slide.content_ru,
                en: slide.content_en,
                kz: slide.title_kz,
                uz: slide.title_uz
              },
              btnTitle: {
                ru: slide.action_name_ru,
                en: slide.action_name_en,
                kz: slide.action_name_kz,
                uz: slide.action_name_uz
              },
              action: slide.action
            });
          }
        }
      }
    },
    changeSlidesText() {}
  }
};
</script>

<style lang="scss" src="~/assets/main.scss"></style>
