<template>
  <div>
    <div class="display-1 text-center mb-5 font-weight-bold">
      {{ t.list_of_applicants }}
    </div>
    <v-card class="px-2">
      <v-card-title>
        {{ t.filter }}
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              v-model="age"
              solo
              :label="t.age"
              color="secondary"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
              v-model="gender"
              :items="genders"
              :label="t.gender"
              color="secondary"
              solo
            ></v-select>
          </v-col>
          <v-col>
            <v-text-field
              v-model="height"
              solo
              :label="t.height"
              color="secondary"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              v-model="education"
              :items="edus"
              solo
              :label="t.education"
              color="secondary"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              v-model="lang_knowledge"
              :label="t.language_know"
              color="secondary"
              :items="langs"
              solo
            ></v-select>
          </v-col>
          <v-col>
            <v-text-field
              :label="t.specialty"
              color="secondary"
              solo
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
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
                :src="employee.photo_1"
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
                    v-if="pageCount != 0 && employees.length > 10"
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
import { DICTIONARY, eventBus, AUTH_DOMAIN } from "~/settings/settings";
import { mapState } from "vuex";
export default {
  layout: "dashboard",
  middleware: "auth",
  head() {
    return {
      title: "List of applicants"
    };
  },
  data() {
    return {
      size: 10,
      page: 1,
      age: "",
      gender: "",
      height: "",
      education: "",
      lang_knowledge: "",
      specialty: "",
      employees: []
    };
  },
  computed: {
    ...mapState({
      lang: state => state.lang,
      emps: state => state.employees.employees,
      languages: state => state.cmsData.languages,
      educations: state => state.cmsData.edu_types
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
    paginatedData: {
      get() {
        const start = (this.page - 1) * this.size;
        const end = start + this.size;

        if (this.employees != null) {
          return this.employees.slice(start, end);
        }
        return [];
      },
      set(val) {
        this.employees = val;
      }
    },
    domain() {
      return AUTH_DOMAIN;
    },
    genders() {
      return [this.t.g_male, this.t.g_female];
    },
    langs() {
      var arr = [this.t.all];
      for (var l in this.languages) {
        if (this.lang == "en") {
          arr.push(this.languages[l].name_en);
        } else {
          arr.push(this.languages[l].name_ru);
        }
      }
      return arr;
    },
    edus() {
      var arr = [this.t.all];
      for (var e in this.educations) {
        if (this.lang == "en") {
          arr.push(this.educations[e].name_en);
        } else {
          arr.push(this.educations[e].name_ru);
        }
      }
      return arr;
    }
  },
  watch: {
    age(val) {
      if (val == "") {
        this.paginatedData = this.emps;
      } else {
        this.paginatedData = this.employees.filter(el => {
          if (el.birth_date) {
            return (new Date().getFullYear() - el.birth_date.split("-")[0])
              .toString()
              .includes(val);
          } else {
            return "";
          }
        });
      }
      this.page = 1;
    },
    gender(val) {
      if (val == "") {
        this.paginatedData = this.emps;
      } else if (val == this.t.g_female) {
        this.paginatedData = this.employees.filter(el => {
          if (el.gender) {
            return el.gender == "f";
          } else {
            return "";
          }
        });
      } else {
        this.paginatedData = this.employees.filter(el => {
          if (el.gender) {
            return el.gender == "m";
          } else {
            return "";
          }
        });
      }
      this.page = 1;
    },
    height(val) {
      if (val == "") {
        this.paginatedData = this.emps;
      } else {
        this.paginatedData = this.emps.filter(el => {
          if (el.height) {
            return el.height.toString().includes(val);
          }
        });
      }
      this.page = 1;
    },
    education(val) {
      if (val == this.t.all) {
        this.paginatedData = this.emps;
      } else {
        var arr = [];
        for (let i = 0; i < this.emps.length; i++) {
          for (let j = 0; j < this.emps[i].education.length; j++) {
            if (this.lang == "en") {
              if (
                this.educations[this.emps[i].education[j].type + "et"]
                  .name_en == val
              ) {
                if (!arr.includes(this.emps[i])) {
                  arr.push(this.emps[i]);
                }
              }
            } else {
              if (
                this.educations[this.emps[i].education[j].type + "et"]
                  .name_ru == val
              ) {
                arr.push(this.emps[i]);
              }
            }
          }
        }
        this.paginatedData = arr;
      }
      this.page = 1;
    },
    lang_knowledge(val) {
      if (val == this.t.all) {
        this.paginatedData = this.emps;
      } else {
        var arr = [];
        for (let i = 0; i < this.emps.length; i++) {
          for (let j = 0; j < this.emps[i].language.length; j++) {
            if (this.lang == "en") {
              if (
                this.languages[this.emps[i].languages[j].language + "l"]
                  .name_en == val
              ) {
                arr.push(this.emps[i]);
              }
            } else {
              if (
                this.languages[this.emps[i].language[j].language + "l"]
                  .name_ru == val
              ) {
                if (!arr.includes(this.emps[i])) arr.push(this.emps[i]);
              }
            }
          }
        }
        this.paginatedData = arr;
      }
      this.page = 1;
    }
  },
  async fetch({ $axios, store }) {
    if (store.state.employees.employees != null) {
      return;
    }
    await $axios
      .get("/api/v2/employees/list")
      .then(response => {
        if (response.status == 200) {
          store.commit("employees/SET_EMPLOYEES_DATA", response.data);
        }
      })
      .catch(error => {
        eventBus.$emit("alert-error", error.response.data);
      });
  },
  created() {
    this.setPage();
    this.employees = this.emps;
  },
  beforeDestroy() {
    this.$store.commit("CHANGE_APPLICANT_LIST_LP", this.page);
  },
  methods: {
    setPage() {
      this.page = this.$store.state.lastPage.applicantList;
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
