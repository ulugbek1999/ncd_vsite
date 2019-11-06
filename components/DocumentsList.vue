<template>
  <div class="documents-modal">
    <v-img :src="require('~/static/pages/documents.jpg')"> </v-img>
    <div
      class="display-1 mt-5 text-center font-weight-bold"
      style="color: #be993e"
    >
      {{ t.documents }}
    </div>
    <section class="documents-list mt-5 mb-5 mx-3">
      <div v-if="cms.documents.length == 0" class="no-files mt-3 ma-3">
        {{ t.no_files }}
      </div>
      <div v-else>
        <div
          v-for="(doc, i) in cms.documents"
          :key="'doc-' + i"
          class="document-section d-flex"
          :data-file="domain + doc.file"
          @click="openFile"
        >
          <div class="document-absolute" :data-file="domain + doc.file"></div>
          <v-icon v-if="doc.file.slice(-3) == 'pdf'" color="#ff0000" size="50px"
            >mdi-file-pdf</v-icon
          >
          <v-icon
            v-else-if="
              doc.file.slice(-3).toLowerCase() == 'doc' ||
                doc.file.slice(-4).toLowerCase() == 'docx'
            "
            color="#285193"
            size="50px"
            >mdi-file-document</v-icon
          >
          <v-icon
            v-else-if="
              doc.file.slice(-3).toLowerCase() == 'jpg' ||
                doc.file.slice(-4).toLowerCase() == 'jpeg' ||
                doc.file.slice(-30).toLowerCase() == 'png'
            "
            color="#f7cb3e"
            size="50px"
            >mdi-file-image</v-icon
          >
          <div v-if="lang == 'en'" class="document-details">
            <div class="title">{{ doc.name_en }}</div>
            <div class="document-size">
              {{ (domain + doc.file).size }}
            </div>
          </div>
          <div v-else-if="lang == 'kz'" class="document-details">
            <div class="title">{{ doc.name_kz }}</div>
            <div class="document-size">
              {{ (domain + doc.file).size }}
            </div>
          </div>
          <div v-else-if="lang == 'uz'" class="document-details">
            <div class="title">{{ doc.name_uz }}</div>
            <div class="document-size">
              {{ (domain + doc.file).size }}
            </div>
          </div>
          <div v-else class="document-details">
            <div class="title">{{ doc.name_ru }}</div>
            <div class="document-size">
              {{ (domain + doc.file).size }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="button-container">
      <v-btn tile class="mb-3" @click="closeOverlay">
        {{ t.close }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { DICTIONARY, eventBus, CMS_DOMAIN } from "~/settings/settings";
import { mapState } from "vuex";
export default {
  data() {
    return {
      lang: this.$route.params.lang
    };
  },
  computed: {
    ...mapState({
      cms: state => state.cmsData
    }),
    t() {
      return DICTIONARY[this.lang];
    },
    domain() {
      return CMS_DOMAIN;
    }
  },
  mounted() {},
  methods: {
    closeOverlay() {
      eventBus.$emit("overlay", false);
    },
    openFile() {
      window.open(event.target.dataset.file, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>
