<template>
  <v-app>
    <NavigationDrawer :lang="lang" :t="t" :items="items" />
    <v-content>
      <v-toolbar flat color="background">
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <div class="headline ml-3 font-weight-bold" style="color: #555">
          National Center for Development
        </div>
        <v-spacer></v-spacer>
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn text class="mx-2" v-on="on">
              <img class="lang-icon mr-1" :src="languages[lang].image" alt />
              <span class="upper-case">{{ languages[lang].lang }}</span>
            </v-btn>
          </template>
          <v-list>
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
        <div class="logout" @click="logout">
          {{ t.logout }}
          <v-badge><v-icon>mdi-login-variant</v-icon></v-badge>
        </div>
      </v-toolbar>
      <v-container class="mt-12" style="max-width: 80%">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawer from "~/components/NavigationDrawer";
import { mapState } from "vuex";
import { DICTIONARY, eventBus, languages } from "~/settings/settings";
export default {
  head() {
    return {
      title: "Dashboard"
    };
  },
  components: {
    NavigationDrawer
  },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState({
      lang: state => state.lang,
      rules: state => state.rules
    }),
    t() {
      return DICTIONARY[this.lang];
    },
    items() {
      return [
        {
          title: this.t.my_profile,
          icon: "mdi-view-dashboard",
          link: `/ru/employer/dashboard/${this.id}/cabinet`
        },
        {
          title: this.t.list_of_applicants,
          icon: "mdi-format-list-bulleted",
          link: `/ru/employer/dashboard/${this.id}/applicant-list`
        },
        {
          title: this.t.my_list,
          icon: "mdi-star",
          link: `/ru/employer/dashboard/${this.id}/my-list`
        }
      ];
    },
    languages() {
      return languages;
    }
  },
  created() {},
  methods: {
    toggleDrawer() {
      eventBus.$emit("toggle-nav-drawer");
    },
    changeLang(event) {
      const l = event.target.dataset.lang.toLowerCase();
      this.$router.replace({
        name: this.$route.name,
        params: { lang: l, id: this.id }
      });
      this.$store.commit("CHANGE_LANGUAGE", l);
    },
    logout() {
      this.$router.push({
        name: "lang",
        params: { lang: this.lang }
      });
    }
  }
};
</script>
