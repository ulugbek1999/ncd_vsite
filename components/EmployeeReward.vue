<template>
  <v-card class="mx-auto" max-width="100%">
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ t.rec_rew }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <div v-if="e.reward.length != 0">
        <v-window-item
          v-for="(rew, i) in e.reward"
          :key="'rew-' + i"
          :value="i + 1"
        >
          <v-card-text>
            <p>
              <strong> {{ t.rew }}: </strong>
              <span v-if="rew.name_ru">
                <span>{{ rew.name_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.rew_com }}: </strong>
              <span v-if="rew.description_ru">
                <span>{{ rew.description_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <div class="files-container">
              <p v-for="(file, ind) in rew.rew_file" :key="'rew-file-' + ind">
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
            <strong> {{ t.rew }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.rew_com }}: </strong>
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
        :disabled="step === e.reward.length || e.reward.length === 0"
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
