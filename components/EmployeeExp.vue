<template>
  <v-card class="mx-auto" max-width="100%">
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ t.work_exp }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <div v-if="e.experience.length != 0">
        <v-window-item
          v-for="(exp, i) in e.experience"
          :key="'exp-' + i"
          :value="i + 1"
        >
          <v-card-text>
            <p>
              <strong> {{ t.work_org }}: </strong>
              <span v-if="exp.organization_ru">
                <span>{{ exp.organization_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.work_date_started }}: </strong>
              <span v-if="exp.date_started">
                <span>{{ exp.date_started }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.work_date_finished }}: </strong>
              <span v-if="exp.date_finished">
                <span>{{ exp.date_finished }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.work_pos }}: </strong>
              <span v-if="exp.position_ru">
                <span>{{ exp.position_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.work_pos }}: </strong>
              <span v-if="exp.position_ru">
                <span>{{ exp.position_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.work_sub_div }}: </strong>
              <span v-if="exp.sub_division_ru">
                <span>{{ exp.sub_division_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <p>
              <strong> {{ t.address }}: </strong>
              <span v-if="exp.address_ru">
                <span>{{ exp.address_ru }}</span>
              </span>
              <span v-else>
                {{ t.undef }}
              </span>
            </p>
            <div class="files-container">
              <p v-for="(file, ind) in exp.army_file" :key="'exp-file-' + ind">
                <v-icon>
                  mdi-file
                </v-icon>
                <exp :href="file.file">{{ t.file }} + {{ ind + 1 }}</exp>
              </p>
            </div>
          </v-card-text>
        </v-window-item>
      </div>
      <v-window-item v-else :value="1">
        <v-card-text>
          <p>
            <strong> {{ t.work_org }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.work_date_started }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.work_date_finished }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.work_pos }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.work_pos }}: </strong>
            <span>
              {{ t.undef }}
            </span>
          </p>
          <p>
            <strong> {{ t.work_sub_div }}: </strong>
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
        :disabled="step === e.experience.length || e.experience.length === 0"
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
