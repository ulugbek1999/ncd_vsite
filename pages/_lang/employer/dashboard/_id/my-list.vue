<template>
  <div>
    <div class="display-1 text-center mb-5 font-weight-bold">
      {{ t.my_list }}
    </div>
    <v-card class="mt-10 pa-3">
      <v-card-title>
        {{ t.candidates }}
      </v-card-title>
      <v-card-text class="mt-5">
        <div v-if="paginatedData.length == 0" class="subtitle-2">
          {{ t.list_empty }}...
        </div>
        <section v-else class="d-flex justify-space-between flex-wrap">
          <div
            v-for="(employee, index) in paginatedData"
            :key="'employee-' + index"
            class="employee mb-5"
          >
            <div class="img-container">
              <v-img
                v-if="!employee.photo_1"
                class="profile-avatar"
                :src="require('~/static/pages/avatar_man.png')"
              ></v-img>
              <v-img
                v-else
                class="profile-avatar"
                :src="domain + employee.photo_1"
              ></v-img>
            </div>

            <div v-if="employee.full_name_en != ''" class="title fullname my-2">
              {{ employee.full_name_en }}
            </div>
            <div v-else class="title fullname my-2">
              {{ employee.full_name_ru }}
            </div>
            <div class="subtitle-1">
              <strong> {{ t.age }}: </strong
              ><v-badge v-if="employee.birth_date != null" class="body-2">{{
                new Date().getFullYear() - employee.birth_date.split("-")[0]
              }}</v-badge>
              <v-badge v-else class="body-2">{{ t.undef }}</v-badge>
            </div>
            <div class="subtitle-1">
              <strong> {{ t.height }}: </strong
              ><v-badge v-if="employee.height" class="body-2">{{
                employee.height
              }}</v-badge>
              <v-badge v-else class="body-2">{{ t.undef }}</v-badge>
            </div>
            <div class="subtitle-1 mb-4">
              <strong> {{ t.gender }}: </strong
              ><v-badge v-if="employee.gender == 'f'" class="body-2">{{
                t.g_female
              }}</v-badge>
              <v-badge v-else class="body-2">{{ t.g_male }}</v-badge>
            </div>
            <v-btn
              class="mb-4"
              color="secondary"
              outlined
              tile
              :data-empid="employee.id"
              :to="{
                name: 'lang-employer-dashboard-id-employee-empid',
                params: {
                  lang: lang,
                  id: $route.params.id,
                  empid: employee.id
                }
              }"
            >
              {{ t.read_more }}
            </v-btn>
          </div>
        </section>
        <div class="text-center">
          <v-container>
            <v-row justify="center">
              <v-col cols="8">
                <v-container class="max-width">
                  <v-pagination
                    v-if="pageCount != 0 && employees.length > size"
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
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { DICTIONARY, AUTH_DOMAIN } from "~/settings/settings";
export default {
  layout: "dashboard",
  middleware: "auth",
  head() {
    return {
      title: "My list"
    };
  },
  data() {
    return {
      employees: [],
      size: 10,
      page: 1
    };
  },
  computed: {
    ...mapState({
      lang: state => state.lang
    }),
    t() {
      return DICTIONARY[this.lang];
    },
    pageCount() {
      if (this.employees != null) {
        return Math.ceil(this.employees.length / this.size);
      }
      return 0;
    },
    paginatedData() {
      const start = (this.page - 1) * this.size;
      const end = start + this.size;

      if (this.employees != null) {
        return this.employees.slice(start, end);
      }
      return [];
    },
    domain() {
      return AUTH_DOMAIN;
    }
  },
  async asyncData({ $axios, params, redirect }) {
    try {
      const response = await $axios.get("/api/v2/employees/employer-list");
      if (response.status == 200) {
        return {
          employees: response.data,
          requested: false
        };
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status == 403) {
          redirect("/" + params.lang);
        } else {
          redirect("/" + params.lang);
        }
      } else {
        redirect("/" + params.lang);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$mainColor: #be993e;

.employee {
  border: 1px solid rgb(223, 222, 222);
  min-height: 200px;
}

.profile-avatar {
  max-width: 200px;
  max-height: 200px;
  margin-right: 20px;
}

.employee {
  color: #333333;
  width: 48%;
}

.fullname {
  font-weight: bold;
}

.img-container {
  height: 200px;
  float: left;
}
</style>
