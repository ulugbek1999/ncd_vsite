<template>
    <v-app>
        <div class="alert-container">
            <v-snackbar
              color="error"
              v-model="alert.error"
              class="alert"
              :timeout="3000"
              top
            >
                {{ alert.errorMessage }}
                <v-btn
                    color="white"
                    text
                    @click="alert.error = false"
                >
                    Close
                </v-btn>
            </v-snackbar>
            <v-snackbar
              color="success"
              v-model="alert.success"
              class="alert"
              :timeout="3000"
              top
            >
                {{ alert.successMessage }}
                <v-btn
                    color="white"
                    text
                    @click="alert.success = false"
                >
                    Close
                </v-btn>
            </v-snackbar>
        </div>
        <ncd-overlay>
            <documents-list/>
            <v-btn
            icon
            class="close"
            @click="closeOverlay"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </ncd-overlay>
        <nav-bar class="nav-desktop" :links="links"></nav-bar>
        <nav-mobile :navItems="links" :languages="languages"></nav-mobile>
        <nuxt/>
        <ncd-footer class="mt-10" :currentLocation="currentLocation"></ncd-footer>
    </v-app>
</template>

<script>
import NcdFooter from '~/components/Footer'
import NavMobile from '~/components/NavMobile'
import NavBar from '~/components/NavBar'
import NcdOverlay from '~/components/Overlay'
import DocumentsList from '~/components/DocumentsList'
import {eventBus} from '~/settings/settings'
import {mapState} from 'vuex'

export default {
    data() {
        return {
            links: [],
            languages: ["Ru", "En", "Kz", "Uz"],
            currentLocation: null,
            currentLanguage: "ru",
            alert: {
                success: false,
                successMessage: "Success",
                error: false,
                errorMessage: "Error"
            }
        }
    },
    components: {
        NavMobile,
        NavBar,
        NcdFooter,
        NcdOverlay,
        DocumentsList
    },
    methods: {
        async resolveLinks () {
            this.currentLocation = this.$router.resolve({name: "lang", params: {"lang": this.currentLanguage}}).href
        },
        closeOverlay() {
            eventBus.$emit('overlay', false)
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.resolveLinks().then(() => {
            this.links = [
                {
                    name: "Услуги",
                    link: this.currentLocation + "#services",
                    scrollable: true,
                    overlay: false,
                },
                {
                    name: "О компании",
                    link: this.currentLocation + "#about",
                    scrollable: true,
                    overlay: false,
                },
                {
                    name: "Вакансии",
                    link: this.$router.resolve({name: "lang-vacancies"}).href,
                    scrollable: false,
                    overlay: false,
                },
                {
                    name: "Документы",
                    link: "",
                    scrollable: false,
                    overlay: true,
                },
                {
                    name: "Вопросы",
                    link: this.$router.resolve({name: "lang-questions"}).href,
                    scrollable: false,
                    overlay: false,
                },
                {
                    name: "Контакты",
                    link: this.currentLocation + "#contacts",
                    scrollable: true,
                    overlay: false,
                }
                ]
            })
        })
    },
    created() {
        eventBus.$on('alert-success', (message) => {
            this.alert.successMessage = message;
            this.alert.success = true;
        })
        eventBus.$on('alert-error', (message) => {
            this.alert.errorMessage = message;
            this.alert.error = true;
        })
    }
}
</script>

<style lang="scss" src="~/assets/main.scss"></style>
<style lang="scss" src="~/assets/responsive.scss"></style>
<style lang="scss" src="~/assets/animations.scss"></style>