<template>
  <div>
    <v-img
      style="background-color: #000"
      :src="require('~/static/pages/questions.jpg')"
      height="80vh"
      class="mb-12"
    >
      <div
        class="display-2 white--text text-center font-weight-bold"
        style="margin-top: 35vh;"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="2000"
      >
        {{ t.faq }}
      </div>
    </v-img>
    <v-container style="min-height: 50vh">
      <div class="text-center header-main display-1 mb-5">
        {{ frequently_asked }}
      </div>
      <QuestionsPanel />
    </v-container>
  </div>
</template>

<script>
import QuestionsPanel from "~/components/Panel";
import { mapState } from "vuex";
import { DICTIONARY } from "~/settings/settings";
export default {
  layout: "main",
  head() {
    return {
      title: "Questions"
    };
  },
  components: {
    QuestionsPanel
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      lang: state => state.lang
    }),
    t() {
      return DICTIONARY[this.lang];
    },
    frequently_asked() {
      if (this.lang == "en") {
        return "Frequently Asked Questions";
      } else if (this.lang == "kz") {
        return "Jïi Qoyılatın Suraqtar";
      } else if (this.lang == "uz") {
        return "Tez-tez so'raladigan savollar";
      } else {
        return "Часто задаваемые вопросы";
      }
    }
  }
};
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>
