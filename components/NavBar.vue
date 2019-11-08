<template>
  <nav class="nav nav-fix">
    <nuxt-link class="logo-container" :to="'/' + lang" tag="div">
      <img id="logo" src="~/static/logo_login.svg" alt="NCD | International" />
    </nuxt-link>
    <div class="nav-links">
      <ul>
        <nuxt-link
          v-for="(link, index) in links"
          :key="'link-' + index"
          tag="li"
          :class="'nav-link-' + index"
          :to="link.link"
          :data-url="link.link"
          :data-scroll="link.scrollable"
          :data-overlay="link.overlay"
          @click.native="navigateTo"
          >{{ link.name }}</nuxt-link
        >
      </ul>
    </div>
    <div class="account mt-2 d-flex">
      <v-btn
        class="ma-2 ml-4 opacity-icon"
        text
        icon
        color="#ddd"
        @click="showAccountInfo"
      >
        <v-icon size="35px">mdi-account-circle-outline</v-icon>
      </v-btn>
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn text dark class="pa-0 mt-2" v-on="on">
            <img class="lang-icon mr-1" :src="languages[lang].image" alt />
            <span class="upper-case">{{ languages[lang].lang }}</span>
          </v-btn>
        </template>
        <v-list style="left: 10px;">
          <v-list-item
            v-for="(object, key) in languages"
            :key="'lang-' + key"
            class="mobile-lang"
            :data-lang="object.lang"
            style="position: relative"
            @click="changeLang"
          >
            <div class="absolute-maker" :data-lang="object.lang"></div>
            <v-list-item-title translate>
              <img class="lang-icon mr-1" :src="object.image" alt />
              <span>
                {{ object.lang }}
              </span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </nav>
</template>

<script>
import { eventBus, languages } from "~/settings/settings";
import { mapState } from "vuex";
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      lang: state => state.lang
    }),
    languages() {
      return languages;
    }
  },
  methods: {
    navigateTo(event) {
      if (event.target.dataset.overlay) {
        event.preventDefault();
        eventBus.$emit("overlay", true);
      }
      if (event.target.dataset.scroll == true) {
        location.href = event.target.dataset.url;
      }
    },
    changeLang(event) {
      const l = event.target.dataset.lang.toLowerCase();
      if (this.$route.name == "lang-vacancy-v") {
        this.$router.replace({
          name: this.$route.name,
          params: { lang: l, v: this.$route.params.v }
        });
      } else if (this.$route.name == "lang-services-s") {
        this.$router.replace({
          name: this.$route.name,
          params: { lang: l, s: this.$route.params.s }
        });
      } else {
        this.$router.replace({
          name: this.$route.name,
          params: { lang: l }
        });
      }
      this.$store.commit("CHANGE_LANGUAGE", l);
      eventBus.$emit("change-lang", l);
    },
    showAccountInfo() {
      eventBus.$emit("alert-error", "This function is not available yet!");
    }
  }
};
</script>

<style lang="scss" scoped src="~/assets/components/navbar.scss"></style>
