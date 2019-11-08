<template>
  <v-container>
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel v-for="(q, i) in questions" :key="'q' + i">
          <div v-if="lang == 'en'">
            <v-expansion-panel-header class="title">{{
              q.question_en
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <span v-html="q.answer_en"></span>
            </v-expansion-panel-content>
          </div>
          <div v-else-if="lang == 'uz'">
            <v-expansion-panel-header class="title">{{
              q.question_uz
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <span v-html="q.answer_uz"></span>
            </v-expansion-panel-content>
          </div>
          <div v-else-if="lang == 'kz'">
            <v-expansion-panel-header class="title">{{
              q.question_kz
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <span v-html="q.answer_kz"></span>
            </v-expansion-panel-content>
          </div>
          <div v-else>
            <v-expansion-panel-header class="title">{{
              q.question_ru
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <span v-html="q.answer_ru"></span>
            </v-expansion-panel-content>
          </div>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      lang: state => state.lang,
      questions: state => state.cmsData.faq
    })
  }
};
</script>
