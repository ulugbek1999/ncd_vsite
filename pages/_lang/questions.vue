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
      <QuestionsPanel :qa="qa" />
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
    return {
      qa: [
        {
          question:
            "На какие вакансии можно подавать заявку без знания языка ?",
          answer:
            "Вы можете подавать заявку практически на все вакансии, лишь в некоторых случая необходимо базовое знание языка или продвинутое, в таких случаях подразумевается активное общение с клиентами ."
        },
        {
          question:
            "Имеются какие-либо возрастные ограничения по возрасту для трудоустройства за границей ?",
          answer:
            "Основной возраст наших соискателей от 22 до 56 лет, однако на некоторые вакансии имеются возрастные ограничения. Для более подробной информации просим отправить нам заявку и мы Вас подробно проконсультируем."
        },
        {
          question:
            "Сколько стоят наши консультации по оформлению рабочей визы ?",
          answer:
            "Все наши консультации бесплатные, однако по рабочей визе мы отвечаем только на общие вопросы, так как процедурой оформления соискателей занимается кадровый отдел работодателя, с которыми мы сотрудничаем. Мы предоставляем бесплатный подбор вакансий для соискателей по их заявкам."
        }
      ]
    };
  },
  computed: {
    ...mapState({
      lang: state => state.lang
    }),
    t() {
      return DICTIONARY[this.lang];
    }
  }
};
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>
