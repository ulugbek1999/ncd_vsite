<template>
    <v-app>
        <nav-bar class="nav-desktop" :links="links"></nav-bar>
        <nav-mobile :navItems="links" :languages="languages"></nav-mobile>
        <nuxt/>
        <ncd-footer class="mt-10"></ncd-footer>
    </v-app>
</template>

<script>
import NcdFooter from '~/components/Footer'
import NavMobile from '~/components/NavMobile'
import NavBar from '~/components/NavBar'

export default {
    data() {
        return {
            links: [],
            languages: ["Ru", "En", "Kz", "Uz"],
            currentLocation: null,
            currentLanguage: "ru"
        }
    },
    components: {
        NavMobile,
        NavBar,
        NcdFooter
    },
    methods: {
        async resolveLinks () {
            this.currentLocation = this.$router.resolve({name: "lang", params: {"lang": this.currentLanguage}}).href
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.resolveLinks().then(() => {
            this.links = [
                {
                    name: "Услуги",
                    link: this.currentLocation + "#services"
                },
                {
                    name: "О компании",
                    link: this.currentLocation + "#about"
                },
                {
                    name: "Вакансии",
                    link: ""
                },
                {
                    name: "Документы",
                    link: ""
                },
                {
                    name: "Вопросы",
                    link: ""
                },
                {
                    name: "Контакты",
                    link: this.currentLocation + "#contacts"
                }
                ]
            })
        })
    }
}
</script>

<style lang="scss" src="~/assets/main.scss"></style>
<style lang="scss" src="~/assets/responsive.scss"></style>
<style lang="scss" src="~/assets/animations.scss"></style>