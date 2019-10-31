<template>
    <div>
        <v-img
          style="background-color: #000"
          :src="require('~/static/pages/vacancy.jpg')"
          height="80vh"
          class="mb-12"
        >
            <div 
              class="display-2 white--text text-center font-weight-bold"
              style="margin-top: 35vh;"
              data-aos="fade"
              data-aos-once="true"
              data-aos-duration="2000"
            >
                Вакансия
            </div>
        </v-img>
        <v-container style="width: 70%">
            <img
              :src="cms + vacancies[index].image"
              width="480"
              contain
              class="vacancy-more-image"
            />
            <div class="display-1 header-main mb-12">{{title}}</div>
            <div class="common-info mb-12">
                <div v-html="short_description"></div>
                <div class="mb-4"><strong>Страна: </strong><span v-html="location"></span></div>
                <div><strong>Заработная плата: </strong>{{wages}}</div>
            </div>
            <hr>
            <div class="common-info mt-12 mb-5" v-html="description"></div>
            <div class="apply-container text-center">
                <v-btn
                  class="mx-auto"
                  tile
                  color="#be993e"
                  dark
                >
                    Подать заявку
                </v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
import {mapState} from "vuex"
import {CMS_DOMAIN} from "~/settings/settings"
export default {
    layout: "main",
    head() {
        return {
            title: "Vacancy"
        }
    },
    components: {

    },
    data() {
        return {
            lang: this.$route.params.lang
        }
    },
    computed: {
        ...mapState({
            vacancies: state => state.cmsData.vacancy
        }),
        index() {
            return this.$route.params.v
        },
        cms() {
            return CMS_DOMAIN
        },
        title() {
            if(this.lang == "ru") {
                return this.vacancies[this.index].title_ru
            }
            else if(this.lang == "en") {
                return this.vacancies[this.index].title_en
            }
            else if(this.lang == "kz") {
                return this.vacancies[this.index].title_kz
            }
            else if(this.lang == "uz") {
                return this.vacancies[this.index].title_uz
            }
        },
        short_description() {
            if(this.lang == "ru") {
                return this.vacancies[this.index].short_description_ru
            }
            else if(this.lang == "en") {
                return this.vacancies[this.index].short_description_en
            }
            else if(this.lang == "kz") {
                return this.vacancies[this.index].short_description_kz
            }
            else if(this.lang == "uz") {
                return this.vacancies[this.index].short_description_uz
            }
        },
        location() {
            if(this.lang == "ru") {
                return this.vacancies[this.index].location_ru
            }
            else if(this.lang == "en") {
                return this.vacancies[this.index].location_en
            }
            else if(this.lang == "kz") {
                return this.vacancies[this.index].location_kz
            }
            else if(this.lang == "uz") {
                return this.vacancies[this.index].location_uz
            }
        },
        wages() {
            if(this.lang == "ru") {
                return this.vacancies[this.index].wages_ru
            }
            else if(this.lang == "en") {
                return this.vacancies[this.index].wages_en
            }
            else if(this.lang == "kz") {
                return this.vacancies[this.index].wages_kz
            }
            else if(this.lang == "uz") {
                return this.vacancies[this.index].wages_uz
            }
        },
        description() {
            if(this.lang == "ru") {
                return this.vacancies[this.index].description_ru
            }
            else if(this.lang == "en") {
                return this.vacancies[this.index].description_en
            }
            else if(this.lang == "kz") {
                return this.vacancies[this.index].description_kz
            }
            else if(this.lang == "uz") {
                return this.vacancies[this.index].description_uz
            }
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped src="~/assets/components/others.scss">

</style>