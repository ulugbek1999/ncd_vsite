<template>
    <v-footer 
      color="rgb(0, 0, 0)"
      dark
      tile
      class="footer-main"
    >
        <v-container
        class="footer-container"
        >
            <v-row>
                <v-col
                  cols="12"
                  lg="4"
                  sm="6"
                  md="6"
                  class="footer-navigation"
                >
                    <p><div class="footer-header text-uppercase">{{t.navigation}}</div></p>
                    <nuxt-link
                      class="footer-secondary footer-nav-link"
                      :to="currentLocation + '#slider'"
                      tag="p"
                      :data-url="currentLocation + '#slider'"
                      @click.native="navigateTo"
                    >
                      {{t.main}}
                    </nuxt-link>
                    <nuxt-link
                      class="footer-secondary footer-nav-link"
                      :to="currentLocation + '#about'"
                      tag="p"
                      :data-url="currentLocation + '#about'"
                      @click.native="navigateTo"
                    >{{t.about_us}}</nuxt-link>
                    <nuxt-link
                      class="footer-secondary footer-nav-link"
                      :to="currentLocation + '#services'"
                      tag="p"
                      :data-url="currentLocation + '#services'"
                      @click.native="navigateTo"
                    >{{t.services}}</nuxt-link>

                </v-col>
                <v-col
                  cols="12"
                  lg="4"
                  md="6"
                  sm="6"
                >
                    <p><div class="footer-header text-uppercase">{{t.contacts}}</div></p>
                    <p class="footer-secondary" style="max-width: 200px">{{phoneCms[0].short_content_en}}</p>
                    <p class="footer-secondary">{{emailCms[0].short_content_en}}</p>
                    <p class="footer-secondary">{{addressContent}}</p>
                </v-col>
                <v-col
                  cols="12"
                  lg="4"
                  md="12"
                  sm="12"
                >
                    <div class="mx-auto newsletter-main">
                        <p><div class="footer-header text-uppercase">{{t.subscribe_mail}}</div></p>
                        <div class="newsletter-container">
                            <v-text-field
                              :label="t.your +  ' Email'"
                              required
                              rounded
                              filled
                              dense
                              light
                              full-width
                              background-color="#fff"
                              width="200px"
                              color="#000"
                              class="mt-2"
                              v-model="email"
                            ></v-text-field>
                            <div class="ml-5 pencil">
                                <v-btn 
                                class="mx-2"
                                fab
                                dark
                                large
                                color="cyan"
                                @click="sendMailingQuery"
                                >
                                    <v-icon dark>mdi-pencil</v-icon dark>
                                </v-btn>
                            </div>
                            <v-btn 
                              class="newsletter-button mb-10"
                              outlined
                              color="#999"
                              rounded
                              @click="sendMailingQuery"
                            >
                              {{t.subscribe}}
                            </v-btn>
                        </div>
                    </div>
                    
                    <div class="social-media-icons mx-auto d-flex">
                        <v-icon>mdi-instagram</v-icon>
                        <v-icon class="ml-5">mdi-facebook</v-icon>
                        <v-icon class="ml-5">mdi-twitter</v-icon>
                    </div>
                </v-col>
            </v-row>
            <v-container 
              class="copyright d-flex justify-space-between mt-10 grey--text text--darken-2"
              
            >
                <p>&copy;&nbsp;NCD&nbsp;|&nbsp;International</p>
                <p>{{t.all_rights}}</p>
            </v-container>
        </v-container>
    </v-footer>
</template>

<script>
import vs from "~/services/VisitorService"
import {eventBus, DICTIONARY} from "~/settings/settings"
import {mapState} from "vuex"
export default {
  data() {
    return {
      email: "",
      lang: this.$route.params.lang
    }
  },
  props: {
    currentLocation: String
  },
  methods: {
    sendMailingQuery() {
      if (!(/.+@.+\..+/.test(this.email))) {
        eventBus.$emit("alert-error", "Please, write the email in the correct format!")
        return
      }
      else {
        this.$nuxt.$loading.start()
        var code = location.host.slice(-2).toUpperCase()
        vs.mailingRequest({
          email: this.email,
          country_code: code
        }).then(response => {
          if (response.status == 200) {
            eventBus.$emit("alert-success", response.data)
            this.email = ""
          }
        }).catch(error => {
          if (error.response.status == 500) {
            eventBus.$emit("alert-error", "Something went wrong!")
          }
          else {
            eventBus.$emit("alert-error", error.response.data)
          }
        }).finally(() => {
          this.$nuxt.$loading.finish()
        })
      }
    },
    navigateTo() {
      location.href = event.target.dataset.url
    }
  },
  computed: {
    t() {
      return DICTIONARY[this.lang]
    },
    ...mapState({
      extra: state => state.cmsData.extra
    }),
    phoneCms() {
      return this.extra.filter((el) => {
        return el.title_en == "Phone";
      })
    },
    emailCms() {
      return this.extra.filter((el) => {
        return el.title_en == "Email";
      })
    },
    addressCms() {
      return this.extra.filter((el) => {
        return el.title_en == "Address";
      })
    },
    addressContent() {
      if (this.lang == "ru") {
          return this.addressCms[0].short_content_ru
      }
      else if(this.lang == "en") {
          return this.addressCms[0].short_content_en
      }
      else if (this.lang == "uz") {
          return this.addressCms[0].short_content_uz
      }
      else if (this.lang == "kz") {
          return this.addressCms[0].short_content_kz
      }
      else {
          return this.addressCms[0].short_content_ru
      }
    }
  }
}
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>
