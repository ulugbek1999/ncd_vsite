<template>
    <v-app>
        <div class="slider-container" id="slider">
            <main-carousel :slides="slides"></main-carousel>
        </div>
        <div class="services-container" id="services">
            <div class="display-2 text-center font-weight-bold header-main">Наши услуги</div>
            <div class="header-split"></div>
            <div class="services-list">
                <div
                    v-for="(service, i) in services"
                    :key="'service-' + i"
                    class="service-widget"
                    data-aos="fade-up"
                    data-aos-mirror="true"
                    data-aos-duration="3000"
                    data-aos-once="true"
                >
                    <div class="service-occupier" @click="navigateToService" :data-index="i"></div>
                    <widget-service
                      :service="service"
                    />
                </div>
            </div>
        </div>
        <div class="about-container">
            <div
              class="display-2 text-center font-weight-bold header-main"
              data-aos="fade"
              data-aos-mirror="true"
              data-aos-duration="2000"
              data-aos-once="false"
            >
              О компании
            </div>
            <div class="header-split"></div>
            <div class="about-info-container mt-10" id="about">
                <div class="about-info">
                    <div class="about-align">
                        <div class="display-1">National Center for Development</div>
                        <p>
                            <b>National Center for Development (NCD)</b> - быстроразвивающаяся компания, позволяющая эффективно использовать трудовые ресурсы мигрантов и направлять их в соответствии с их квалификацией в те страны и те организации, где они наилучшим образом смогут применить свои навыки и знания.
                        </p>
                        <p>
                            Мы оказываем квалифицированную помощь трудовым мигрантам Республики Узбекистан и других стран Центральной Азии, желающим найти работу за рубежом, включая посильное содействие в процессе языковой адаптации в другой стране.
                        </p>
                            <v-btn
                              tile
                              color="#be993e"
                              dark
                              :to="{name: 'lang-about', params: {'lang': this.$route.params.lang}}"
                            >
                                Подробнее
                            </v-btn>
                        </nuxt-link>
                    </div>
                </div>
                <div class="about-image" :style="'background-image: url(' + require('~/static/pages/about.jpg') + ')'"></div>
            </div>
            <div class="stats pt-10"  id="stats">
                <div class="stats-wrapper text-center">
                    <div class="stat">
                        <h2>
                            <animated-number
                                :value="stats.employers"
                                :formatValue="formatToNumber"
                                :duration="2000"
                            >
                            </animated-number>
                        </h2>
                        <p>работодателей</p>
                    </div>
                    <div class="stat">
                        <h2>
                            <animated-number
                                :value="stats.employees"
                                :formatValue="formatToNumber"
                                :duration="3000"
                            >
                            </animated-number>
                        </h2>
                        <p>аппликантов</p>
                    </div>
                    <div class="stat">
                        <h2>
                             <animated-number
                                :value="stats.years"
                                :formatValue="formatToNumber"
                                :duration="2000"
                            >
                            </animated-number>
                        </h2>
                        <p>год опыта</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="partners-container mt-10 mb-10">
            <div 
                class="display-2 text-center font-weight-bold header-main"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-mirror="true"
                data-aos-once="true"
            >
                Партнеры
            </div>
            <div class="header-split"></div>
            <partners-slick :partners="partners"/>
        </div>
        <div class="location mt-10 mb-10">
            <div 
                class="display-2 text-center font-weight-bold header-main"
                data-aos="fade-right"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-duration="2000"
                id="contacts"
            >
                Контакты
            </div>
            <div class="header-split mb-10"></div>
            <div class="google-maps-container mt-10">
                <keep-alive>
                    <component
                      :is="'google-maps'"
                    />
                </keep-alive>
            </component>
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
                        <v-form 
                          class="contact-form mt-10"
                          v-model="validQuery"
                          ref="queryForm"
                        >
                            <v-text-field
                                color="#be993e"
                                label="Имя"
                                filled
                                required
                                v-model="query.name"
                                :rules="rules.name"
                            ></v-text-field>
                            <v-text-field
                                color="#be993e"
                                label="Email"
                                filled
                                required
                                :rules="rules.email"
                                v-model="query.email"
                            ></v-text-field>
                            <v-text-field
                                color="#be993e"
                                label="Тема"
                                filled
                                v-model="query.subject"
                            ></v-text-field>
                            <v-textarea
                                filled
                                name="input-7-4"
                                id="message"
                                style="resize: none;"
                                label="Сообщение"
                                auto-grow
                                color="#be993e"
                                required
                                :rules="rules.message"
                                v-model="query.message"
                            ></v-textarea>
                            <v-btn
                              tile
                              color="#be993e"
                              dark
                              style="float: right;"
                              @click="sendQuery"
                            >Отправить</v-btn>
                        </v-form>
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
    </v-app>
</template>

<script>
import MainCarousel from '~/components/MainCarousel'
import WidgetService from '~/components/WidgetService'
import PartnersSlick from '~/components/PartnersSlick'
import GoogleMaps from '~/components/GoogleMaps'
import AOS from 'aos'
import AnimatedNumber from "animated-number-vue";
import {mapState} from "vuex";
import {eventBus} from "~/settings/settings"
import vs from "~/services/VisitorService"

export default {
    layout: "main",
    head() {
        return {
            title: "Homepage"
        }
    },
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
            stats: {
                employers: 0,
                employees: 0,
                years: 0,
                animated: false
            },
            query: {
                name: "",
                email: "",
                subject: "",
                message: "",
                location: ""
            },
            rules: {
                name: [
                    v => !!v || 'Name is required',
                ],
                email: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                subject: [
                    v => !!v || 'Subject is required',
                ],
                message: [
                    v => !!v || 'Message is required',
                ]
            },
            validQuery: true
        }
    },
    components: {
        MainCarousel,
        WidgetService,
        PartnersSlick,
        GoogleMaps,
        AnimatedNumber        
    },
    computed: {
        ...mapState({
            services: state => state.services
        })
    },
    mounted() {

        var stats = document.querySelector("#stats")
        window.addEventListener('scroll', () => {
            if ((window.scrollY >= (stats.offsetTop - window.innerHeight)) && !this.stats.animated) {
                this.stats = {
                    employers: 19,
                    employees: 431,
                    years: 1,
                    animated: true
                }
            }
        })

        // Rerender google maps component every time when this page is mounted
    },
    methods: {
        formatToNumber(value) {
            return value.toFixed(0)
        },
        navigateToService(event) {
            this.$router.push({
                name: 'lang-services-s',
                params: {s: event.target.dataset.index}
            })
        },
        sendQuery() {
            if (!this.validQuery) {
                eventBus.$emit("alert-error", "Please, fill all the required fields correctly!")
                return
            }
            this.query.location = location.host
            this.$nuxt.$loading.start()
            vs.clientRequest(this.query).then((response) => {
                eventBus.$emit("alert-success", response.data)
                this.query = {
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    location: ""
                }
                this.resetValidation()
              }).catch(error => {
                  if (error.response.status == 500) {
                      eventBus.$emit("alert-error", "Something went wrong!")
                      return
                  }
                  eventBus.$emit("alert-error", error.response.data)
              }).finally(() => {
                  this.$nuxt.$loading.finish()
              })
        },
        resetValidation () {
            this.$refs.queryForm.resetValidation()
        }
    },
    watch: {

    }
}
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>

