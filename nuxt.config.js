import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + "NCD | International",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#be993e" },
  /*
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],
  axios: {
    baseURL: "http://127.0.0.1:8000",
    credentials: false
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      light: true,
      themes: {
        dark: {
          primary: "#be993e",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: "#fafafa"
        },
        light: {
          secondary: "#be993e",
          background: "#fafafa"
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extend() {},
    vendor: ["aos", "vue2-google-maps"]
  },
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/vue2-google-maps.js" },
    { src: "~/plugins/ga.js", mode: "client" }
  ],
  css: ["aos/dist/aos.css"],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/v2/ncd/authenticate/user/",
            method: "post",
            propertyName: "token"
          },
          logout: { url: "/api/auth/logout", method: "post" },
          user: {
            url: "/api/v2/ncd/get/user/",
            method: "get",
            propertyName: "user"
          }
        },
        tokenRequired: true,
        tokenType: "JWT"
      }
    }
  }
};
