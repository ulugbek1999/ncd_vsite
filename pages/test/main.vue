<template>
    <v-app>
        <nav-bar class="nav-desktop" :links="links"></nav-bar>
        <nav-mobile :navItems="links" :languages="languages"></nav-mobile>
        <div class="slider-container">
            <main-carousel :slides="slides"></main-carousel>
        </div>
        <div class="services-container">
            <div class="display-2 text-center font-weight-bold header-main">Наши услуги</div>
            <div class="header-split"></div>
            <div class="services-list">
                <widget-service v-for="(service, i) in services" :key="'service-' + i" :service="service"/>
            </div>
        </div>
        <div class="about-container">
            <div class="display-2 text-center font-weight-bold header-main">О компании</div>
            <div class="header-split"></div>
            <div class="about-info-container mt-10">
                <div class="about-info">
                    <div class="about-align">
                        <div class="display-1">National Center for Development</div>
                        <p>
                            <b>National Center for Development (NCD)</b> - быстроразвивающаяся компания, позволяющая эффективно использовать трудовые ресурсы мигрантов и направлять их в соответствии с их квалификацией в те страны и те организации, где они наилучшим образом смогут применить свои навыки и знания.
                        </p>
                        <p>
                            Мы оказываем квалифицированную помощь трудовым мигрантам Республики Узбекистан и других стран Центральной Азии, желающим найти работу за рубежом, включая посильное содействие в процессе языковой адаптации в другой стране.
                        </p>
                        <button class="about-button primary-button mt-10">Подробнее</button>
                    </div>
                </div>
                <div class="about-image" :style="'background-image: url(' + require('~/static/pages/about.jpg') + ')'"></div>
            </div>
            <div class="stats pt-10">
                <div class="stats-wrapper text-center">
                    <div class="stat">
                        <h2>19</h2>
                        <p>работодателей</p>
                    </div>
                    <div class="stat">
                        <h2>403</h2>
                        <p>аппликантов</p>
                    </div>
                    <div class="stat">
                        <h2>1</h2>
                        <p>год опыта</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="partners-container mt-10 mb-10">
            <div class="display-2 text-center font-weight-bold header-main">Партнеры</div>
            <div class="header-split"></div>
            <partners-slick :partners="partners"/>
        </div>
        <div class="location mt-10 mb-10">
            <div class="display-2 text-center font-weight-bold header-main">Контакты</div>
            <div class="header-split mb-10"></div>
            <div class="google-maps-container mt-10">
                <google-maps/>
            </div>
            <v-container class="contact-form-container ">
                <v-row>
                    <v-col
                      cols="12"
                      lg="6"
                      md="6"
                      sm="12"
                      xl="6"
                    >
                        <div class="inquiry">
                            <div class="display-1">Вопросы</div>
                            <p class="contact-info mt-5">По любым вопросам или рекомендациям, звоните на номер +7 707 020 25 49 или заполните следующую форму:</p>
                        </div>
                        <form class="contact-form mt-10">
                            <v-text-field
                                color="#be993e"
                                label="Имя"
                                filled
                                required
                            ></v-text-field>
                            <v-text-field
                                color="#be993e"
                                label="Email"
                                filled
                                required
                            ></v-text-field>
                            <v-text-field
                                color="#be993e"
                                label="Тема"
                                filled
                                required
                            ></v-text-field>
                            <v-textarea
                                filled
                                name="input-7-4"
                                id="message"
                                style="resize: none;"
                                label="Сообщение"
                                auto-grow
                                color="#be993e"
                            ></v-textarea>
                            <v-btn
                              tile
                              color="#be993e"
                              dark
                              style="float: right;"
                            >Отправить</v-btn>
                        </form>
                    </v-col>
                    <v-col
                      cols="12"
                      xl="6"
                      lg="6"
                      md="6"
                      sm="12"
                    >
                        <div class="display-1">Главный офис</div>
                        <p class="contact-info mt-5">г. Алматы, Мухамеджанова 9 </p>   <p class="contact-info mt-5">info@ncd.kz</p> 
                        <p class="contact-info">+7 707 020 25 49</p>   <p class="contact-info">+7 778 683 83 28</p> 
                        <div class="display-1 mt-10">Устройство на работу</div>
                        <p class="contact-info mt-5">Чтобы устроиться на работу, отправьте своё резюме на электронный адрес info@ncd.kz</p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <ncd-footer class="mt-10"></ncd-footer>
    </v-app>
</template>

<script>
import MainCarousel from '~/components/MainCarousel'
import NavBar from '~/components/NavBar'
import WidgetService from '~/components/WidgetService'
import PartnersSlick from '~/components/PartnersSlick'
import GoogleMaps from '~/components/GoogleMaps'
import NcdFooter from '~/components/Footer'
import NavMobile from '~/components/NavMobile'

export default {
    layout: "simple",
    data () {
        return {
            slides: [
                {
                    image: require("~/static/pages/slider-1.jpg"),
                    title: "Трудоустройство за рубежом",
                    subtitle: "Поможем найти достойную работу"
                },
                {
                    image: require("~/static/pages/slider-2.jpg"),
                    title: "Содействие в получении виз",
                    subtitle: "Консультации по визовым вопросам"
                },
                {
                    image: require("~/static/pages/slider-3.jpg"),
                    title: "Профиль соискателя",
                    subtitle: "Личная карточка для оценки квалификации"
                },
            ],
            links: [
                {
                    name: "Услуги",
                    url: "#"
                },
                {
                    name: "О компании",
                    url: "#"
                },
                {
                    name: "Вакансии",
                    url: "#"
                },
                {
                    name: "Документы",
                    url: "#"
                },
                {
                    name: "Вопросы",
                    url: "#"
                },
                {
                    name: "Контакты",
                    url: "#"
                }
            ],
            services: [
                {
                    image: require("~/static/pages/database.jpg"),
                    title: "База данных соискателей",
                    content: "Структурированные данные и быстрый поиск"
                },
                {
                    image: require("~/static/pages/profile.jpg"),
                    title: "Профиль соискателя",
                    content: "Личная карточка для оценки квалификации"
                },
                {
                    image: require("~/static/pages/consulting.jpg"),
                    title: "Бесплатная консультация",
                    content: "Мы ответим на все интересующие вас вопросы"
                },
                {
                    image: require("~/static/pages/visa.jpg"),
                    title: "Содействие в получении виз",
                    content: "Консультации по визовым вопросам"
                },
                {
                    image: require("~/static/pages/departure.jpg"),
                    title: "Подготовка к отъезду",
                    content: "Финальные шаги"
                },
                {
                    image: require("~/static/pages/education.jpg"),
                    title: "Предоставления обучения",
                    content: "Повышение квалификации и уровня владения языком"
                }
            ],
            partners: [
                {
                    image: require("~/static/pages/interlingvo.jpg"),
                    title: "Учебный центр Intelingvo"
                },
                {
                    image: require("~/static/pages/biovela.png"),
                    title: "BIOVELA-UTENOS MĖSA"
                },
                {
                    image: require("~/static/pages/sobirovs.jpg"),
                    title: "Sobirovs Law Firm"
                }
            ],
            languages: ["Ru", "En", "Kz", "Uz"]
        }
    },
    components: {
        MainCarousel,
        NavBar,
        WidgetService,
        PartnersSlick,
        GoogleMaps,
        NcdFooter,
        NavMobile
    }
}
</script>

<style lang="scss" src="~/assets/main.scss"></style>
<style lang="scss" src="~/assets/responsive.scss"></style>