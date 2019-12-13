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
          v-for="(lang, i) in e.language"
          :key="'lang-' + i"
          :value="i + 1"
          :class="'lang-' + i"
        >
          <v-card-text>
            <p>
              <strong> {{ t.lang_name }}: </strong>
              <span v-if="lang.language">
                <span>{{ lang.language }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.lang_level }}: </strong>
              <span v-if="lang.level">
                <span>{{ lang.level }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <div class="files-container">
              <p
                v-for="(file, ind) in lang.lang_file"
                :key="'lang-file-' + ind"
              >
                <v-icon>
                  mdi-file
                </v-icon>
                <a :href="file.file">{{ t.file }} + {{ ind + 1 }}</a>
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
      countries: state => state.cmsData.countries
    }),
    t() {
      return DICTIONARY[this.lang];
    }
  }
};
</script>
