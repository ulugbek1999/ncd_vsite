<template>
    <v-app>
        <div class="slider-container" id="slider">
            <main-carousel :slides="slides"></main-carousel>
        </div>
        <div class="services-container" id="services">
            <div class="display-2 text-center font-weight-bold header-main">{{t.our_services}}</div>
            <div class="header-split"></div>
            <div class="services-list">
                <div
                    v-for="(service, i) in services"
                    :key="'service-' + i"
                    class="service-widget"
                    data-aos="fade-up"
                    data-aos-mirror="true"
                    data-aos-duration="3000"
                    data-aos-once="false"
                    v-if="service.status"
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
            >
              {{ t.about_company }}
            </div>
            <div class="header-split"></div>
            <div class="about-info-container mt-10" id="about">
                <div class="about-info">
                    <div class="about-align">
                        <div class="display-1">National Center for Development</div>
                        <div v-html="aboutContent"></div>
                            <v-btn
                              class="mt-4"
                              tile
                              color="#be993e"
                              dark
                              :to="{name: 'lang-about', params: {'lang': this.$route.params.lang}}"
                            >
                                {{ t.read_more }}
                            </v-btn>
                        </nuxt-link>
                    </div>
                </div>
                <div class="about-image" :style="'background-image: url(' + require('~/static/pages/about.jpg') + ')'"></div>
            </div>
            <div class="stats pt-10"  id="stats">
                <div class="stats-wrapper text-center text-lowercase">
                    <div class="stat">
                        <h2>
                            <animated-number
                                :value="stats.employers"
                                :formatValue="formatToNumber"
                                :duration="2000"
                            >
                            </animated-number>
                        </h2>
                        <p>{{t.employers}}</p>
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
                        <p>{{t.candidates}}</p>
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
                        <p>{{t.year_of_exp}}</p>
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
                {{t.partners}}
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
                {{t.contacts}}
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
                            <div class="display-1 font-weight-bold">{{ questionsTitle }}</div>
                            <p class="contact-info mt-5">{{questionsContent}}</p>
                        </div>
                        <v-form 
                          class="contact-form mt-10"
                          v-model="validQuery"
                          ref="queryForm"
                        >
                            <v-text-field
                                color="#be993e"
                                :label="'Имя'"
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
                                :label="'Тема'"
                                filled
                                v-model="query.subject"
                                :rules="rules.subject"
                                required
                            ></v-text-field>
                            <v-textarea
                                filled
                                name="input-7-4"
                                id="message"
                                style="resize: none;"
                                :label="'Сообщение'"
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
                            >{{t.send}}</v-btn>
                        </v-form>
                    </v-col>
                    <v-col
                      cols="12"
                      xl="6"
                      lg="6"
                      md="6"
                      sm="12"
                    >
                        <div class="display-1 font-weight-bold">{{officeTitle}}</div>
                        <p class="contact-info mt-5">{{addressContent}}</p>   <p class="contact-info mt-5">info@ncd.kz</p> 
                        <p class="contact-info" v-for="(phone, i) in phoneArray" :key="'phone-' + i">{{ phone }}</p> 
                        <div class="display-1 mt-10 font-weight-bold">{{employmentTitle}}</div>
                        <p class="contact-info mt-5">{{employmentContent}}</p>
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
import {eventBus, DICTIONARY} from "~/settings/settings"
import vs from "~/services/VisitorService"

export default {
    layout: "main",
    middleware: "language",
    head() {
        return {
            title: "Homepage"
        }
    },
    data () {
        return {
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
            validQuery: true,
            lang: this.$route.params.lang
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
            services: state => state.cmsData.service,
            extra: state => state.cmsData.extra,
            about: state => state.cmsData.about
        }),
        questionsCms() {
            return this.extra.filter((el) => {
                return el.title_en == "Questions"
            })
        },
        questionsTitle() {
            if (this.lang == "ru") {
                return this.questionsCms[0].title_ru
            }
            else if(this.lang == "en") {
                return this.questionsCms[0].title_en
            }
            else if (this.lang == "uz") {
                return this.questionsCms[0].title_uz
            }
            else if (this.lang == "kz") {
                return this.questionsCms[0].title_kz
            }
            else {
                return this.questionsCms[0].title_ru
            }
        },
        questionsContent() {
            if (this.lang == "ru") {
                return this.questionsCms[0].short_content_ru
            }
            else if(this.lang == "en") {
                return this.questionsCms[0].short_content_en
            }
            else if (this.lang == "uz") {
                return this.questionsCms[0].short_content_uz
            }
            else if (this.lang == "kz") {
                return this.questionsCms[0].short_content_kz
            }
            else {
                return this.questionsCms[0].short_content_ru
            }
        },
        officeTitle() {
            if (this.lang == "ru") {
                return "Главный офис"
            }
            else if(this.lang == "en") {
                return "Main office"
            }
            else if (this.lang == "uz") {
                return "Bosh ofisimiz"
            }
            else if (this.lang == "kz") {
                return "Bas keñse"
            }
            else {
                return "Главный офис"
            }
        },
        addressCms() {
            return this.extra.filter((el) => {
                return el.title_en == "Address"
            })
        },
        addressContent() {
            return "г. Алматы, Мухамеджанова 9"
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
        },
        phoneCms() {
            return this.extra.filter((el) => {
                return el.title_en == "Phone"
            })
        },
        phoneArray() {
            return this.phoneCms[0].short_content_en.split(";")
        },
        employmentCms() {
            return this.extra.filter((el) => {
                return el.title_en == "Employment"
            })
        },
        employmentTitle() {
            return "Устройство на работу"
            if (this.lang == "ru") {
                return this.employmentCms[0].title_ru
            }
            else if(this.lang == "en") {
                return this.employmentCms[0].title_en
            }
            else if (this.lang == "uz") {
                return this.employmentCms[0].title_uz
            }
            else if (this.lang == "kz") {
                return this.employmentCms[0].title_kz
            }
            else {
                return this.employmentCms[0].title_ru
            }
        },
        employmentContent() {
            if (this.lang == "ru") {
                return this.employmentCms[0].short_content_ru
            }
            else if(this.lang == "en") {
                return this.employmentCms[0].short_content_en
            }
            else if (this.lang == "uz") {
                return this.employmentCms[0].short_content_uz
            }
            else if (this.lang == "kz") {
                return this.employmentCms[0].short_content_kz
            }
            else {
                return this.employmentCms[0].short_content_ru
            }
        },
        t() {
            return DICTIONARY[this.lang]
        },
        aboutContent() {
            if (this.lang == "ru") {
                return this.about[0].content_ru
            }
            else if(this.lang == "en") {
                return this.about[0].content_en
            }
            else if (this.lang == "uz") {
                return this.about[0].content_uz
            }
            else if (this.lang == "kz") {
                return this.about[0].content_kz
            }
            else {
                return this.about[0].content_ru
            }
        },
        slides() {
            return [
                {
                    image: require("~/static/pages/slider-1.jpg"),
                    title: this.t.employment_abroad,
                    subtitle: this.t.employment_abroad_text
                },
                {
                    image: require("~/static/pages/slider-2.jpg"),
                    title: this.t.help_with_visa,
                    subtitle: this.t.help_with_visa_text
                },
                {
                    image: require("~/static/pages/slider-3.jpg"),
                    title: this.t.applicant_profile,
                    subtitle: this.t.applicant_profile_text
                }
            ]
        }
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
    }
}
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>

