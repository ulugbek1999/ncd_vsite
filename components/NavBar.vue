<template>
    <nav class="nav nav-fix">
        <nuxt-link
          class="logo-container"
          :to="'/' + lang"
          tag="div"
        >
            <img src="~/static/logo_login.svg" alt="NCD | International" id="logo">
        </nuxt-link>
        <div class="nav-links">
            <ul>
                <nuxt-link
                    tag="li"
                    v-for="(link, index) in links"
                    :key="'link-' + index"
                    :class="'nav-link-' + index"
                    :to="link.link"
                    :data-url="link.link"
                    @click.native="navigateTo"
                    :data-scroll="link.scrollable"
                >
                    {{ link.name }}
                </nuxt-link>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            lang: this.$route.params.lang
        }
    },
    methods: {
        navigateTo(event) {
            if (event.target.dataset.scroll == "true") {
                location.href = event.target.dataset.url
            }
        }
    }
}
</script>

<style lang="scss" scoped src="~/assets/components/navbar.scss"></style>