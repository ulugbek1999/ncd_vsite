<template>
  <div>
    <v-img
      style="background-color: #000"
      :src="require('~/static/pages/vacancies.jpg')"
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
        {{ t.vacancies }}
      </div>
    </v-img>
    <v-container style="width: 90%">
      <section class="vacancies-section text-center">
        <div class="display-1 header-main">{{ t.list_of_vacancies }}</div>
        <div
          v-if="Math.floor(paginatedData.length / 3) >= 1"
          class="d-flex flex-wrap vacancy-list justify-space-around"
        >
          <VacancyWidget
            v-for="(vacancy, index) in paginatedData"
            :key="'vacancy-' + index"
            :index="(page - 1) * size + index"
            :vacancy="vacancy"
            class="mt-12 mb-12"
          />
        </div>
        <div v-else class="d-flex flex-wrap vacancy-list justify-space-between">
          <VacancyWidget
            v-for="(vacancy, index) in paginatedData"
            :key="'vacancy-' + index"
            :index="(page - 1) * size + index"
            :vacancy="vacancy"
            class="mt-12 mb-12"
          />
        </div>
      </section>
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination
                  v-model="page"
                  class="my-4"
                  :length="pageCount"
                  color="#be993e"
                ></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </div>
</template>

<script>
import VacancyWidget from "~/components/VacancyWidget";
import { mapState } from "vuex";
import { DICTIONARY } from "~/settings/settings";
export default {
  layout: "main",
  head() {
    return {
      title: "Vacancies"
    };
  },
  components: {
    VacancyWidget
  },
  data() {
    return {
      page: 1,
      size: 9
    };
  },
  computed: {
    ...mapState({
      vacancies: state => state.cmsData.vacancy,
      lang: state => state.lang
    }),
    pageCount() {
      return Math.ceil(this.vacancies.length / this.size);
    },
    paginatedData() {
      const start = (this.page - 1) * this.size;
      const end = start + this.size;

      return this.vacancies.slice(start, end);
    },
    t() {
      return DICTIONARY[this.lang];
    }
  },
  watch: {},
  methods: {}
};
</script>

<style lang="scss" scoped src="~/assets/components/others.scss"></style>
