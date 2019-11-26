<template>
  <div
    style="position: absolute; top: 0; bottom: 0; right: 0; left: 0; overflow-y: scroll"
  >
    <div class="documents-modal">
      <v-img :src="require('~/static/pages/documents.jpg')"> </v-img>
      <div
        class="display-1 mt-5 text-center font-weight-bold"
        style="color: #be993e"
      >
        {{ t.documents }}
      </div>
      <v-tabs
        v-model="document"
        light
        style="width: 94%"
        color="secondary"
        class="mx-auto mt-5"
      >
        <v-tabs-slider> </v-tabs-slider>
        <v-tab href="#employers">{{ t.for_employers }}</v-tab>
        <v-tab href="#candidates">{{ t.for_candidates }}</v-tab>
        <v-tab href="#other">{{ t.other }}</v-tab>

        <v-tabs-items v-model="document" class="documents-list mt-5 mb-5 mx-3">
          <v-tab-item value="employers">
            <div
              v-if="employerDocuments.length == 0"
              class="no-files mt-3 ma-3"
            >
              {{ t.no_files }}
            </div>
            <div v-else>
              <div
                v-for="(doc, i) in employerDocuments"
                :key="'doc-' + i"
                class="document-section d-flex"
                :data-file="domain + doc.file"
              >
                <a :href="domain + doc.file" target="_blank">
                  <div
                    class="document-absolute"
                    :data-file="domain + doc.file"
                  ></div>
                </a>
                <v-icon
                  v-if="doc.file.slice(-3) == 'pdf'"
                  color="#ff0000"
                  size="50px"
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
                <v-icon v-else color="#888" size="50px">
                  mdi-file
                </v-icon>
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
          </v-tab-item>
          <v-tab-item value="candidates">
            <div
              v-if="candidateDocuments.length == 0"
              class="no-files mt-3 ma-3"
            >
              {{ t.no_files }}
            </div>
            <div v-else>
              <div
                v-for="(doc, i) in candidateDocuments"
                :key="'doc-' + i"
                class="document-section d-flex"
                :data-file="domain + doc.file"
              >
                <a :href="domain + doc.file" target="_blank">
                  <div
                    class="document-absolute"
                    :data-file="domain + doc.file"
                  ></div>
                </a>
                <v-icon
                  v-if="doc.file.slice(-3) == 'pdf'"
                  color="#ff0000"
                  size="50px"
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
                <v-icon v-else color="#888" size="50px">
                  mdi-file
                </v-icon>
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
          </v-tab-item>
          <v-tab-item value="other">
            <div v-if="otherDocuments.length == 0" class="no-files mt-3 ma-3">
              {{ t.no_files }}
            </div>
            <div v-else>
              <div
                v-for="(doc, i) in otherDocuments"
                :key="'doc-' + i"
                class="document-section d-flex"
                :data-file="domain + doc.file"
              >
                <a :href="domain + doc.file" target="_blank">
                  <div
                    class="document-absolute"
                    :data-file="domain + doc.file"
                  ></div>
                </a>
                <v-icon
                  v-if="doc.file.slice(-3) == 'pdf'"
                  color="#ff0000"
                  size="50px"
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
                <v-icon v-else color="#888" size="50px">
                  mdi-file
                </v-icon>
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
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>

      <div class="button-container">
        <v-btn tile class="mb-3" @click="closeOverlay">
          {{ t.close }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { DICTIONARY, eventBus, CMS_DOMAIN } from "~/settings/settings";
import { mapState } from "vuex";
export default {
  data() {
    return {
      lang: this.$route.params.lang,
      document: null,
      tabValues: ["employers", "candidates", "other"]
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
    },
    employerDocuments() {
      return this.cms.documents.filter(el => {
        return el.type == "for_employers";
      });
    },
    candidateDocuments() {
      return this.cms.documents.filter(el => {
        return el.type == "for_candidates";
      });
    },
    otherDocuments() {
      return this.cms.documents.filter(el => {
        return el.type != "for_employers" && el.type != "for_candidates";
      });
    }
  },
  watch: {},
  mounted() {},
  methods: {
    closeOverlay() {
      eventBus.$emit("overlay", false);
    }
  }
};
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>
