<template>
  <v-navigation-drawer permanent app dark :mini-variant.sync="mini">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          <section class="nav-context pt-5">
            <nuxt-link class="logo-container" :to="'/' + lang" tag="div">
              <v-img
                class="mb-5 small-logo"
                :src="require('~/static/logo-small.png')"
                max-width="100px"
              >
              </v-img>
            </nuxt-link>
          </section>
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ t.personal_cabinet }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { eventBus } from "~/settings/settings";
export default {
  props: {
    items: {
      type: Array,
      default: function() {
        return [
          { title: "Dashboard", icon: "mdi-view-dashboard" },
          { title: "Photos", icon: "mdi-image" },
          { title: "About", icon: "mdi-help-box" }
        ];
      }
    },
    lang: {
      type: String,
      required: true
    },
    t: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      right: null,
      mini: true
    };
  },
  computed: {},
  created() {
    eventBus.$on("toggle-nav-drawer", () => {
      this.mini = !this.mini;
    });
  }
};
</script>

<style lang="scss" scoped>
.small-logo:hover {
  cursor: pointer;
}
</style>
