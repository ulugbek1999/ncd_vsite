<template>
  <v-row align="center" justify="center">
      <v-row justify="center">
        <v-overlay
          :absolute="absolute"
          :value="overlay"
          z-index="10000000000000"
        >
          <slot></slot>
        </v-overlay>
      </v-row>
  </v-row>
</template>

<script>
import {eventBus} from "~/settings/settings"

export default {
    data: () => ({
        absolute: false,
        overlay: false
    }),
    mounted() {
      eventBus.$on('overlay', (bool) => {
        this.overlay = bool
      })
    },
    watch: {
      overlay(val) {
        if (val == true) {
          document.querySelector("html").style.overflowY = "hidden"
        }
        else {
          document.querySelector("html").style.overflowY = "scroll"
        }
      }
    }
}
</script>