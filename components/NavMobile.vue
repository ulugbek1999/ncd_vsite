<template>
  <div>
    <v-row class="nav-mobile">
      <div>
        <v-app-bar color="#000" dark>
          <v-app-bar-nav-icon
            class="mobile-navigator-lines"
            @click="sideMenuToggle"
          ></v-app-bar-nav-icon>

          <v-toolbar-title>NCD | International</v-toolbar-title>

          <div class="flex-grow-1"></div>

          <v-menu left bottom>
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
        </v-app-bar>
      </div>
    </v-row>
    <div v-show="activeSideMenu" class="side-menu-overlay">
      <div id="side" class="side-menu">
        <div
          class="close-btn"
          @click="
            sideMenuToggle();
            navigateTo();
          "
        >
          &times;
        </div>
        <div class="nav-list">
          <ul>
            <nuxt-link
              v-for="(l, i) in navItems"
              v-if="!l.overlay"
              :key="'nav-mobile-item-' + i"
              :to="l.link"
              tag="li"
              :data-overlay="l.overlay"
              :data-scroll="l.scrollable"
              data-lang
              @click.native="sideMenuToggle"
            >
              {{ l.name }}
            </nuxt-link>
            <li v-else :key="'nav-mobile-item-' + i" @click="navigateTo">
              {{ l.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus, languages } from "~/settings/settings";
import { mapState } from "vuex";
export default {
  props: {
    navItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeSideMenu: false
    };
  },
  computed: {
    ...mapState({
      lang: state => state.lang
    }),
    languages() {
      return languages;
    }
  },
  watch: {
    activeSideMenu() {
      if (this.activeSideMenu == true) {
        document.querySelector("html").style.overflowY = "hidden";
      } else {
        document.querySelector("html").style.overflowY = "scroll";
      }
    }
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
    navigateTo() {
      this.sideMenuToggle();
      if (event.target.dataset.overlay) {
        event.preventDefault();
        eventBus.$emit("overlay", true);
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
    }
  }
};
</script>
