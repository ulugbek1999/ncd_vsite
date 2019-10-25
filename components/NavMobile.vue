<template>
    <div>
        <v-row class="nav-mobile">
            <div>
            <v-app-bar
                color="#000"
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
                    class="mobile-lang"
                    :data-lang="n"
                    v-for="n in languages"
                    :key="n"
                    >
                    <v-list-item-title>{{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </v-app-bar>
            </div>
        </v-row>
        <div class="side-menu-overlay" v-show="activeSideMenu">
            <div class="side-menu" id="side">
                <div class="close-btn" @click="sideMenuToggle">&times;</div>
                <div class="nav-list">
                    <ul>
                        <nuxt-link :to="l.link" tag="li" @click.native="sideMenuToggle" v-for="(l, i) in navItems" :key="'nav-mobile-item-' + i">{{ l.name }}</nuxt-link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeSideMenu: false
        }
    },
    methods: {
        sideMenuToggle() {
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
        },
    },
    props: {
        navItems: {
            type: Array,
            required: true
        },
        languages: {
            type: Array,
            required: true
        }
    },
    watch: {
        activeSideMenu() {
            if (this.activeSideMenu == true) {
                document.querySelector("html").style.overflowY = "hidden"
            }
            else {
                document.querySelector("html").style.overflowY = "scroll"
            }
        }
    }
}
</script>