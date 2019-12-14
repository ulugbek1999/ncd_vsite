<template>
  <v-card class="mx-auto" max-width="100%">
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ t.military_service }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <div v-if="e.army.length != 0">
        <v-window-item v-for="(a, i) in e.army" :key="'a-' + i" :value="i + 1">
          <v-card-text>
            <p>
              <strong> {{ t.military_name }}: </strong>
              <span v-if="a.name_ru">
                <span>{{ a.name_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.military_date_started }}: </strong>
              <span v-if="a.date_started">
                <span v-if="lang == 'en'"
                  >{{ a.date_started.split("-")[1] }}/{{
                    a.date_started.split("-")[2]
                  }}/{{ a.date_started.split("-")[0] }}</span
                >
                <span v-else
                  >{{ a.date_started.split("-")[2] }}/{{
                    a.date_started.split("-")[1]
                  }}/{{ a.date_started.split("-")[0] }}</span
                >
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.region }}: </strong>
              <span v-if="a.region_ru">
                <span>{{ a.region_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.military_date_finished }}: </strong>
              <span v-if="a.date_finished">
                <span v-if="lang == 'en'"
                  >{{ a.date_finished.split("-")[1] }}/{{
                    a.date_finished.split("-")[2]
                  }}/{{ a.date_finished.split("-")[0] }}</span
                >
                <span v-else
                  >{{ a.date_finished.split("-")[2] }}/{{
                    a.date_finished.split("-")[1]
                  }}/{{ a.date_finished.split("-")[0] }}</span
                >
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.military_rank }}: </strong>
              <span v-if="a.rank_ru">
                <span>{{ a.rank_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <div class="files-container">
              <p v-for="(file, ind) in a.army_file" :key="'a-file-' + ind">
                <a :href="file.file">
                  <v-icon>
                    mdi-file
                  </v-icon>
                  {{ t.file }} - {{ ind + 1 }}</a
                >
              </p>
            </div>
          </v-card-text>
        </v-window-item>
      </div>
      <v-window-item v-else :value="1">
        <v-card-text>
          <p>
            <strong> {{ t.military_name }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.military_date_started }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.region }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.military_date_finished }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.military_rank }}: </strong>
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
        :disabled="step === e.army.length || e.army.length === 0"
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
