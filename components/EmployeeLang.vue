<template>
  <v-card class="mx-auto" max-width="100%">
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ t.lang_knowledge }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <div v-if="e.language.length != 0">
        <v-window-item
          v-for="(l, i) in e.language"
          :key="'language-' + i"
          :value="i + 1"
          :class="'language-' + i"
        >
          <v-card-text>
            <p>
              <strong> {{ t.lang_name }}: </strong>
              <span v-if="l.language">
                <span v-if="lang == 'ru'">{{
                  language_cms[l.language + "l"].name_ru
                }}</span>
                <span v-else>{{ language_cms[l.language + "l"].name_en }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.lang_level }}: </strong>
              <span v-if="l.level == 1">
                <span>{{ t.excellent }}</span>
              </span>
              <span v-else-if="l.level == 2">
                <span>{{ t.good }}</span>
              </span>
              <span v-else-if="l.level == 3">
                <span>{{ t.not_bad }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <div class="files-container">
              <p
                v-for="(file, ind) in l.lang_file"
                :key="'language-file-' + ind"
              >
                <a :href="file.file">
                  <v-icon>
                    mdi-file
                  </v-icon>
                  {{ t.file }} + {{ ind + 1 }}
                </a>
              </p>
            </div>
          </v-card-text>
        </v-window-item>
      </div>
      <v-window-item v-else :value="1">
        <v-card-text>
          <p>
            <strong> {{ t.lang_name }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.lang_level }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :disabled="step === 1" text @click="step--">
        {{ t.back }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === e.language.length || e.language.length === 0"
        color="primary"
        text
        depressed
        @click="step++"
      >
        {{ t.next }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import { DICTIONARY } from "~/settings/settings";
export default {
  props: {
    e: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    step: 1
  }),
  computed: {
    ...mapState({
      lang: state => state.lang,
      countries: state => state.cmsData.countries,
      language_cms: state => state.cmsData.languages
    }),
    t() {
      return DICTIONARY[this.lang];
    }
  },
  mounted() {
    console.log(this.language_cms[1 + "l"].name_ru);
  }
};
</script>
