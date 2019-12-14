<template>
  <v-card class="mx-auto" max-width="100%">
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ t.education }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <div v-if="e.education.length != 0">
        <v-window-item
          v-for="(edu, i) in e.education"
          :key="'edu-' + i"
          :value="i + 1"
        >
          <v-card-text>
            <p>
              <strong> {{ t.education_type }}: </strong>
              <span v-if="e.education.length != 0">
                <span v-if="lang == 'en'">
                  <span v-if="edu.type">
                    {{ edu_types[edu.type + "et"].name_en }}
                  </span>
                  <span v-else>
                    {{ t.undef }}
                  </span>
                </span>
                <span v-else>
                  <span v-if="edu.type">
                    {{ edu_types[edu.type + "et"].name_ru }}
                  </span>
                  <span v-else>
                    {{ t.undef }}
                  </span>
                </span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.edu_centname }}: </strong>
              <span v-if="edu.name_ru">
                <span>{{ edu.name_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.address }}: </strong>
              <span v-if="edu.address_ru">
                <span>{{ edu.address_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.specialty }}: </strong>
              <span v-if="edu.specialization_ru">
                <span>{{ edu.specialization_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.date_started_edu }}: </strong>
              <span v-if="edu.date_started">
                <span v-if="lang == 'en'"
                  >{{ edu.date_started.split("-")[1] }}/{{
                    edu.date_started.split("-")[2]
                  }}/{{ edu.date_started.split("-")[0] }}</span
                >
                <span v-else
                  >{{ edu.date_started.split("-")[2] }}/{{
                    edu.date_started.split("-")[1]
                  }}/{{ edu.date_started.split("-")[0] }}</span
                >
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.date_finished_edu }}: </strong>
              <span v-if="edu.date_finished">
                <span v-if="lang == 'en'"
                  >{{ edu.date_finished.split("-")[1] }}/{{
                    edu.date_finished.split("-")[2]
                  }}/{{ edu.date_finished.split("-")[0] }}</span
                >
                <span v-else>
                  {{ edu.date_finished.split("-")[2] }}/{{
                    edu.date_finished.split("-")[1]
                  }}/{{ edu.date_finished.split("-")[0] }}
                </span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.additional_info_edu }}: </strong>
              <span v-if="edu.additional_ru">
                <span>{{ edu.additional_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <div class="files-container">
              <p v-for="(file, ind) in edu.edu_file" :key="'edu-file-' + ind">
                <a :href="file.file">
                  <v-icon>
                    mdi-file
                  </v-icon>
                  {{ t.file }} - {{ ind + 1 }}
                </a>
              </p>
            </div>
          </v-card-text>
        </v-window-item>
      </div>
      <v-window-item v-else :value="1">
        <v-card-text>
          <p>
            <strong> {{ t.education_type }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.edu_centname }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.address }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.specialty }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.date_started_edu }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.date_finished_edu }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.additional_info_edu }}: </strong>
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
        :disabled="step === e.education.length || e.education.length == 0"
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
      edu_types: state => state.cmsData.edu_types
    }),
    t() {
      return DICTIONARY[this.lang];
    },
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign-up";
        case 2:
          return "Create a password";
        default:
          return "Account created";
      }
    }
  }
};
</script>
