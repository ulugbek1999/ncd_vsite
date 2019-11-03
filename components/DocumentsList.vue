<template>
    <div class="documents-modal">
        <v-img
          :src="require('~/static/pages/documents.jpg')"
        >

        </v-img>
        <div class="display-1 mt-5 text-center font-weight-bold" style="color: #be993e">Документы</div>
        <section class="documents-list mt-5 mb-5 mx-3">
            <div class="no-files mt-3 ma-3">No files were found.</div>
        </section>
        <div class="button-container">
            <v-btn
              tile
              class="mb-3"
              @click="closeOverlay"
            >
                {{ t.close }}
            </v-btn>
        </div>
        
    </div>
</template>

<script>
import {DICTIONARY, eventBus} from '~/settings/settings'
import {mapState} from 'vuex'
export default {
    data() {
        return {
            lang: this.$route.params.lang
        }
    },
    computed: {
        ...mapState({
            cms: state => state.cmsData
        }),
        t() {
            return DICTIONARY[this.lang]
        }
    },
    methods: {
        closeOverlay() {
            eventBus.$emit('overlay', false)
        }
    }
}
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>