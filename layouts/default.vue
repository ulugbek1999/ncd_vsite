<template>
  <v-app id="main" style="height: 1200px;">
    <v-container>
      <v-row class="nav-desktop">
        <v-col 
          cols="12" 
          lg="4" 
          md="4"
          sm="4"
          align-self="center"
        >
        <v-item-group class="auth-container">
          <v-badge class="link" style="margin-right: 10px;">Войти</v-badge>
          <v-badge class="link">Регистрация</v-badge>
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
        <v-col
          cols="12"
          lg="4"
          md="4"
          sm="4"
          align-self="center"
        >
          <v-item-group 
            class="lang-change"
          >
            <v-badge class="link">RU</v-badge>
            <v-badge class="link">ENG</v-badge>
            <v-badge class="link" >KZ</v-badge>
          </v-item-group>
        </v-col>
      </v-row>
      <v-row justify="space-around" class="nav-desktop">
        <v-badge class="link" v-for="(n, i) in navItems" :key="'nav-item-desktop-' + i">{{ n.name }}</v-badge>
      </v-row>
      <v-row class="nav-mobile">
        <div>
          <v-app-bar
            color="#be993e"
            dark
          >
            <v-app-bar-nav-icon class="mobile-navigator-lines" @click="sideMenuToggle"></v-app-bar-nav-icon>

            <v-toolbar-title>NCD | International</v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-menu
              left
              bottom
            >
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" class="lang-selector">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>


              <v-list style="left: 10px;">
                <v-list-item
                  v-for="n in languages"
                  :key="n"
                  @click="() => {}"
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
      <carousel :slides="this.slides"/>
    </v-row>
    <nuxt/>
    <div class="side-menu-overlay" v-show="activeSideMenu">
      <div class="side-menu" id="side">
        <div class="close-btn" @click="sideMenuToggle">&times;</div>
        <div class="nav-list">
          <ul>
            <li v-for="(l, i) in navItems" :key="'nav-mobile-item-' + i">{{ l.name }}</li>
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
        <h2>Наши услуги</h2>
      </div>
      <v-row class="services-container mx-auto mb-10">
        <v-col cols="12" lg="3" md="3" v-for="(service, index) in services" :key="'service-' + index">
          <div class="service-container">
            <img :src="service.imageUrl" alt="" class="service-image mx-auto">
            <h4 class="service-header">
              {{ service.title }}
            </h4>
            <p class="service-content">{{ service.description }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-around" class="copyright-container">
        <div class="logo-footer-container">
          <img src="~/static/logo_login.svg" alt="Logo" id="logo-footer">
          <p class="mt-5">&copy;2019 NCD. Все права защищены</p>
        </div>
        <div class="contacts">
          <h3 class="contacts-header">Контакты</h3>
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
import Carousel from "~/components/Carousel.vue"

export default {
  data () {
    return {
      navItems: [
        {
          name: "Вакансии"
        },
        {
          name: "О компании"
        },
        {
          name: "Услуги"
        },
        {
          name: "Документы"
        },
        {
          name: "Партнеры"
        },
        {
          name: "Образование"
        },
        {
          name: "Вопросы"
        },
        {
          name: "Контакты"
        }
      ],
      slides: [
        {
          title: "Трудоустройство за рубежом",
          subtitle: "Поможем найти достойную работу",
          btnTitle: "Найти работу",
          image: require("~/static/pages/slider.png"),
        }, 
        {
          image: require("~/static/pages/slider.png"),
        } 
      ],
      services: [
        {
          imageUrl: require("~/static/icons/client.png"),
          title: "Бесплатная консультация",
          description: "Мы ответим на все интересующие вас вопросы"
        },
        {
          imageUrl: require("~/static/icons/folder.png"),
          title: "База данных соискателей",
          description: "Структурированные данные и быстрый поиск"
        },
        {
          imageUrl: require("~/static/icons/user.png"),
          title: "Профиль соискателей",
          description: "Личная карточка для оценки квалификации"
        },
        {
          imageUrl: require("~/static/icons/contract.png"),
          title: "Содействие в получении визы",
          description: "Консультации по визовым вопросам"
        },
      ],
      languages: ["Ru", "En", "Kz", "Uz"],
      activeSideMenu: false
    }
  },
  components: {
    Carousel
  },
  methods: {
    sideMenuToggle () {
        if (!this.activeSideMenu) {
          
          this.activeSideMenu = true
          setTimeout(() => {
            document.querySelector("#side").style.transform = "translateX(300px)"
          }, 700)
        }
        else {
          document.querySelector("#side").style.transform = "translateX(0px)"
          setTimeout(() => {
            this.activeSideMenu = false
          }, 700)
          
        }
    }
  },
  mounted () {
    this.$nextTick(() => {
    })
  }
}
</script>

<style lang="scss" src="~/assets/main.scss"></style>
