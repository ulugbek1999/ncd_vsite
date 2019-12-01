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
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn
            class="ma-2 ml-4 opacity-icon"
            text
            icon
            color="#ddd"
            v-on="on"
          >
            <v-icon size="35px">mdi-account-circle-outline</v-icon>
          </v-btn>
        </template>
        <v-card v-if="$auth.loggedIn">
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle
                  >Founder of Vuetify.js</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-action>
                <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-switch v-model="message" color="purple"></v-switch>
              </v-list-item-action>
              <v-list-item-title>Enable messages</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-action>
                <v-switch v-model="hints" color="purple"></v-switch>
              </v-list-item-action>
              <v-list-item-title>Enable hints</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="menu = false">Cancel</v-btn>
            <v-btn color="primary" text @click="menu = false">Save</v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else max-width="350px">
          <v-list>
            <v-list-item class="text-center">
              <v-list-item-content>
                <v-list-item-title>{{ t.not_authenticated }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  t.sign_in_or_register
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-form style="width: 90%" class="mx-auto">
                <v-text-field
                  v-model="credentials.username"
                  :label="t.username"
                  prepend-icon="mdi-account-circle"
                  class="my-2"
                ></v-text-field>
                <v-text-field
                  v-model="credentials.password"
                  :label="t.password"
                  prepend-icon="mdi-lock"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
                <v-card-actions>
                  <v-btn dark tile @click="signin">
                    {{ t.log_in }}
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="error" tile @click="menu = !menu">
                    {{ t.close }}
                  </v-btn>
                </v-card-actions>
                <div
                  v-if="lang == 'en'"
                  class="text-center body-2 py-2"
                  style="color: #888;"
                >
                  Register <a href="#" @click="openOptionForm">here</a>
                </div>
                <div
                  v-else-if="lang == 'kz'"
                  class="text-center body-2 py-2"
                  style="color: #888;"
                >
                  <a href="#" @click="openOptionForm">Munda</a> tirkeliñiz
                </div>
                <div
                  v-else-if="lang == 'uz'"
                  class="text-center body-2 py-2"
                  style="color: #888;"
                >
                  <a href="#" @click="openOptionForm">Bu yerda</a> ro'yxatdan
                  o'ting
                </div>
                <div
                  v-else
                  class="text-center body-2 py-2"
                  style="color: #888;"
                >
                  Зарегистрируйтесь
                  <a href="#" @click="openOptionForm">здесь</a>
                </div>
              </v-form>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
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
import { DICTIONARY } from "~/settings/settings";
// import as from "~/services/AuthService";
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
      showPassword: false,
      credentials: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState({
      lang: state => state.lang,
      isAuthenticated: state => state.credentials.isAuthenticated
    }),
    languages() {
      return languages;
    },
    t() {
      return DICTIONARY[this.lang];
    }
  },
  methods: {
    navigateTo(event) {
      if (event.target.dataset.overlay) {
        event.preventDefault();
        eventBus.$emit("overlay", true);
      }
      if (event.target.dataset.scroll == "true") {
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
    signin() {
      if (this.credentials.username == "") {
        eventBus.$emit("alert-error", "Username cannot be empty!");
        return;
      }
      if (this.credentials.password == "") {
        eventBus.$emit("alert-error", "Password cannot be empty!");
        return;
      }
      this.$nuxt.$loading.start();
      this.$auth.loginWith("local", {
        data: this.credentials
      });
    },
    openOptionForm() {
      this.menu = false;
      eventBus.$emit("show-role-dialog");
    }
  }
};
</script>

<style lang="scss" scoped src="~/assets/components/navbar.scss"></style>
