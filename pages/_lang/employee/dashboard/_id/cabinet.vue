<template>
  <div>
    <input
      style="visibility: hidden;"
      type="file"
      class="files photo_1"
      data-photo="photo_1"
      accept="image/jpeg, image/png"
      @change="changeFile"
    />
    <input
      style="visibility: hidden;"
      type="file"
      class="files photo_2"
      data-photo="photo_2"
      accept="image/jpeg, image/png"
      @change="changeFile"
    />
    <input
      style="visibility: hidden;"
      type="file"
      class="files photo_3"
      data-photo="photo_3"
      accept="image/jpeg, image/png"
      @change="changeFile"
    />
    <input
      style="visibility: hidden;"
      type="file"
      class="files photo_4"
      data-photo="photo_4"
      accept="image/jpeg, image/png"
      @change="changeFile"
    />
    <div class="display-1 text-center mb-5 font-weight-bold">
      {{ t.applicant_data }}
    </div>
    <v-card class="px-5 py-9 card-main">
      <v-badge class="badge-right mr-5 mt-n4">{{ e.register_number }}</v-badge>
      <div class="main-info-container">
        <div class="employee-images mr-5">
          <v-row>
            <v-hover v-slot:default="{ hover }">
              <v-img
                v-if="e.photo_1"
                width="40%"
                :src="e.photo_1"
                aspect-ratio="0.75"
                alt="Photo 1"
              >
                <v-expand-transition>
                  <div :class="{ 'on-hover': hover }" class="v-card-reveal">
                    <div class="d-flex buttons-image" style="top: 40%">
                      <v-btn
                        dark
                        color="blue darken-4"
                        rounded
                        data-photo="photo_1"
                        @click.stop="changePhoto"
                      >
                        <div class="absolute-maker" data-photo="photo_1"></div>
                        {{ t.change }}
                      </v-btn>
                    </div>
                    <div class="d-flex buttons-image" style="top: 60%;">
                      <v-btn
                        dark
                        color="deep-orange darken-3"
                        rounded
                        data-photo="photo_1"
                        @click.stop="deletePhoto"
                      >
                        <div class="absolute-maker" data-photo="photo_1"></div>
                        {{ t.delete }}
                      </v-btn>
                    </div>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-img
                v-else
                width="40%"
                :src="require('~/static/pages/photo_placeholder.png')"
                aspect-ratio="0.75"
                alt="Photo 1"
              >
                <div :class="{ 'on-hover': hover }" class="v-card-reveal">
                  <div class="d-flex buttons-image" style="top: 44%">
                    <v-btn
                      dark
                      color="blue darken-4"
                      rounded
                      data-photo="photo_1"
                      @click="changePhoto"
                    >
                      <div class="absolute-maker" data-photo="photo_1"></div>
                      {{ t.change }}
                    </v-btn>
                  </div>
                </div>
              </v-img>
            </v-hover>
            <v-spacer></v-spacer>
            <v-hover v-slot:default="{ hover }">
              <v-img
                v-if="e.photo_2"
                width="40%"
                :src="e.photo_2"
                aspect-ratio="0.75"
                alt="Photo 2"
              >
                <v-expand-transition>
                  <div :class="{ 'on-hover': hover }" class="v-card-reveal">
                    <div class="d-flex buttons-image" style="top: 40%">
                      <v-btn
                        dark
                        color="blue darken-4"
                        rounded
                        data-photo="photo_2"
                        @click="changePhoto"
                      >
                        <div class="absolute-maker" data-photo="photo_2"></div>
                        {{ t.change }}
                    </v-btn>
                    </div>
                    <div class="d-flex buttons-image" style="top: 60%">
                      <v-btn
                        dark
                        color="deep-orange darken-3"
                        rounded
                        data-photo="photo_2"
                        @click="deletePhoto"
                      >
                        <div class="absolute-maker" data-photo="photo_2"></div>
                        {{ t.delete }}
                      </v-btn>
                    </div>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-img
                v-else
                width="40%"
                :src="require('~/static/pages/photo_placeholder.png')"
                aspect-ratio="0.75"
                alt="Photo 2"
              >
                <div :class="{ 'on-hover': hover }" class="v-card-reveal">
                  <div class="d-flex buttons-image" style="top: 44%">
                    <v-btn
                      dark
                      color="blue darken-4"
                      rounded
                      data-photo="photo_2"
                      @click="changePhoto"
                    >
                      <div class="absolute-maker" data-photo="photo_2"></div>
                      {{ t.change }}
                    </v-btn>
                  </div>
                </div>
              </v-img>
            </v-hover>
          </v-row>
          <v-row class="mt-5">
            <v-hover v-slot:default="{ hover }">
              <v-img
                v-if="e.photo_3"
                width="40%"
                :src="e.photo_3"
                aspect-ratio="0.75"
                alt="Photo 3"
              >
                <v-expand-transition>
                  <div :class="{ 'on-hover': hover }" class="v-card-reveal">
                    <div class="d-flex buttons-image" style="top: 40%">
                      <v-btn
                        dark
                        color="blue darken-4"
                        rounded
                        data-photo="photo_3"
                        @click="changePhoto"
                      >
                        <div class="absolute-maker" data-photo="photo_3"></div>
                        {{ t.change }}
                      </v-btn>
                    </div>
                    <div class="d-flex buttons-image" style="top: 60%">
                      <v-btn
                        dark
                        color="deep-orange darken-3"
                        rounded
                        data-photo="photo_3"
                        @click="deletePhoto"
                      >
                        <div class="absolute-maker" data-photo="photo_3"></div>
                        {{ t.delete }}
                      </v-btn>
                    </div>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-img
                v-else
                width="40%"
                :src="require('~/static/pages/photo_placeholder.png')"
                aspect-ratio="0.75"
                alt="Photo 3"
              >
                <div :class="{ 'on-hover': hover }" class="v-card-reveal">
                  <div class="d-flex buttons-image" style="top: 44%">
                    <v-btn
                      dark
                      color="blue darken-4"
                      rounded
                      data-photo="photo_3"
                      @click="changePhoto"
                    >
                      <div class="absolute-maker" data-photo="photo_3"></div>
                      {{ t.change }}
                    </v-btn>
                  </div>
                </div>
              </v-img>
            </v-hover>
            <v-spacer></v-spacer>
            <v-hover v-slot:default="{ hover }">
              <v-img
                v-if="e.photo_4"
                width="40%"
                :src="e.photo_4"
                aspect-ratio="0.75"
                alt="Photo 4"
              >
                <v-expand-transition>
                  <div :class="{ 'on-hover': hover }" class="v-card-reveal">
                    <div class="d-flex buttons-image" style="top: 40%">
                      <v-btn
                        dark
                        color="blue darken-4"
                        rounded
                        data-photo="photo_4"
                        @click="changePhoto"
                      >
                        <div class="absolute-maker" data-photo="photo_4"></div>
                        {{ t.change }}
                      </v-btn>
                    </div>
                    <div class="d-flex buttons-image" style="top: 60%">
                      <v-btn
                        dark
                        color="deep-orange darken-3"
                        rounded
                        data-photo="photo_4"
                        @click="deletePhoto"
                      >
                        <div class="absolute-maker" data-photo="photo_4"></div>
                        {{ t.delete }}
                      </v-btn>
                    </div>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-img
                v-else
                width="40%"
                :src="require('~/static/pages/photo_placeholder.png')"
                aspect-ratio="0.75"
                alt="Photo 4"
              >
                <div :class="{ 'on-hover': hover }" class="v-card-reveal">
                  <div class="d-flex buttons-image" style="top: 44%">
                    <v-btn
                      dark
                      color="blue darken-4"
                      rounded
                      data-photo="photo_4"
                      @click="changePhoto"
                    >
                      <div class="absolute-maker" data-photo="photo_4"></div>
                      {{ t.change }}
                    </v-btn>
                  </div>
                </div>
              </v-img>
            </v-hover>
          </v-row>
        </div>
        <div>
          <div v-if="lang == 'en'" class="headline font-weight-bold">
            <span
              v-if="e.full_name_en != null || e.full_name_en != ''"
              class="pl-3"
            >
              {{ e.full_name_en }}
            </span>
            <span v-else>
              {{ e.full_name_ru }}
            </span>
          </div>
          <div v-else-if="lang == 'en'" class="headline font-weight-bold">
            <span
              v-if="e.full_name_en != null || e.full_name_en != ''"
              class="pl-3"
            >
              {{ e.full_name_en }}
            </span>
            <span v-else>
              {{ e.full_name_ru }}
            </span>
          </div>
          <div v-else class="headline font-weight-bold">
            <span
              v-if="e.full_name_en != null || e.full_name_en != ''"
              class="pl-3"
            >
              {{ e.full_name_en }}
            </span>
            <span v-else>
              {{ e.full_name_ru }}
            </span>
          </div>
        </div>
        <div class="main-info mt-5">
          <v-row>
            <v-col>
              <p>
                <strong>{{ t.specialty }}:</strong>
                <span v-if="e.specialty">
                  {{ e.specialty }}
                </span>
                <span v-else>
                  {{ t.undef }}
                </span>
              </p>
              <p>
                <strong>{{ t.gender }}:</strong>
                <span v-if="e.gender == 'f'">
                  {{ t.g_female }}
                </span>
                <span v-else>
                  {{ t.g_male }}
                </span>
              </p>
              <p>
                <strong>{{ t.passport_serial }}:</strong>
                <span>
                  {{ e.passport_serial }}
                </span>
              </p>
              <p>
                <strong>{{ t.date_of_issue }}:</strong>
                <span v-if="lang == 'en'">
                  <span v-if="e.passport_given_date">
                    {{ e.passport_given_date.split("-")[1] }}/{{
                      e.passport_given_date.split("-")[2]
                    }}/{{ e.passport_given_date.split("-")[0] }}
                  </span>
                  <span v-else>
                    {{ t.undef }}
                  </span>
                </span>
                <span v-else>
                  <span v-if="e.passport_given_date">
                    {{ e.passport_given_date.split("-")[2] }}/{{
                      e.passport_given_date.split("-")[1]
                    }}/{{ e.passport_given_date.split("-")[0] }}
                  </span>
                  <span v-else>
                    {{ t.undef }}
                  </span>
                </span>
              </p>
              <p>
                <strong>{{ t.expiry_date }}:</strong>
                <span v-if="lang == 'en'">
                  <span v-if="e.passport_expires">
                    {{ e.passport_expires.split("-")[1] }}/{{
                      e.passport_expires.split("-")[2]
                    }}/{{ e.passport_expires.split("-")[0] }}
                  </span>
                  <span v-else>
                    {{ t.undef }}
                  </span>
                </span>
                <span v-else>
                  <span v-if="e.passport_given_date">
                    {{ e.passport_expires.split("-")[2] }}/{{
                      e.passport_expires.split("-")[1]
                    }}/{{ e.passport_expires.split("-")[0] }}
                  </span>
                  <span v-else>
                    {{ t.undef }}
                  </span>
                </span>
              </p>
              <p>
                <strong>{{ t.tin }}:</strong>
                <span v-if="!e.tin">
                  {{ t.undef }}
                </span>
                <span v-else>{{ e.tin }}</span>
              </p>
              <p>
                <strong>{{ t.birth_date }}:</strong>
                <span v-if="lang == 'en'">
                  <span v-if="e.passport_expires">
                    {{ e.birth_date.split("-")[1] }}/{{
                      e.birth_date.split("-")[2]
                    }}/{{ e.birth_date.split("-")[0] }}
                  </span>
                  <span v-else>
                    {{ t.undef }}
                  </span>
                </span>
                <span v-else>
                  <span v-if="e.birth_date">
                    {{ e.birth_date.split("-")[2] }}/{{
                      e.birth_date.split("-")[1]
                    }}/{{ e.birth_date.split("-")[0] }}
                  </span>
                  <span v-else>
                    {{ t.undef }}
                  </span>
                </span>
              </p>
              <p>
                <strong>{{ t.place_birth }}:</strong>
                <span>
                  {{ e.birth_place_ru }}
                </span>
              </p>
              <p>
                <strong>{{ t.place_residence }}:</strong>
                <span>
                  {{ e.living_address_ru }}
                </span>
              </p>
              <p>
                <strong>{{ t.height }}:</strong>
                <span v-if="e.height">
                  {{ e.height }}
                </span>
                <span v-else>
                  {{ t.undef }}
                </span>
              </p>
            </v-col>
            <v-col>
              <p>
                <strong>{{ t.weight }}:</strong>
                <span v-if="e.weight">
                  {{ e.weight }}
                </span>
                <span v-else>
                  {{ t.undef }}
                </span>
              </p>
              <p>
                <strong>{{ t.blood_group }}:</strong>
                <span v-if="e.blood_group">
                  {{ e.blood_group }}
                </span>
                <span v-else>
                  {{ t.undef }}
                </span>
              </p>
              <p>
                <strong>{{ t.vision_l }}:</strong>
                <span v-if="e.vision_l">
                  {{ e.vision_l }}
                </span>
                <span v-else>
                  {{ t.undef }}
                </span>
              </p>
              <p>
                <strong>{{ t.vision_r }}:</strong>
                <span v-if="e.vision_r">
                  {{ e.vision_r }}
                </span>
                <span v-else>
                  {{ t.undef }}
                </span>
              </p>
              <p>
                <strong>{{ t.vision_r }}:</strong>
                <span v-if="e.vision_r">
                  {{ e.blood_group }}
                </span>
                <span v-else>
                  {{ t.undef }}
                </span>
              </p>
              <p>
                <strong>{{ t.desired_countries }}:</strong>
                <span v-if="e.countries.length == 0">
                  {{ t.undef }}
                </span>
                <span v-else>
                  <span v-for="(ex, i) in e.countries" :key="'ex-' + i">
                    <span v-if="lang == 'en'">
                      {{ countries[ex.country_id + "c"].name_en }}
                    </span>
                    <span v-else>
                      {{ countries[ex.country_id + "c"].name_ru }}
                    </span>
                    <span v-if="i != e.countries.length - 1">, </span>
                  </span>
                </span>
              </p>
              <p>
                <strong>{{ t.is_ready_for_university }}:</strong>
                <span v-if="e.is_ready_for_university != null">
                  <span v-if="e.is_ready_for_university">
                    {{ t.yes }}
                  </span>
                  <span v-else>
                    {{ t.no }}
                  </span>
                </span>
                <span v-else>
                  {{ t.undef }}
                </span>
              </p>
              <p>
                <strong>{{ t.hobby }}:</strong>
                <span v-if="lang == 'en'">
                  <span v-if="e.hobby_en || e.hobby_en != ''">{{
                    e.hobby_ru
                  }}</span>
                  <span v-else-if="e.hobby_ru || e.hobby_ru != ''">{{
                    e.hobby_ru
                  }}</span>
                  <span v-else>{{ t.undef }}</span>
                </span>
                <span v-else>
                  <span v-if="e.hobby_en || e.hobby_en != ''">{{
                    e.hobby_en
                  }}</span>
                  <span v-else-if="e.hobby_ru || e.hobby_ru != ''">{{
                    e.hobby_ru
                  }}</span>
                  <span v-else>{{ t.undef }}</span>
                </span>
              </p>
              <p>
                <strong>{{ t.other_2 }}:</strong>
                <span v-if="lang == 'en'">
                  <span v-if="e.other_en != '' || e.other_en != ''">{{
                    e.other_ru
                  }}</span>
                  <span v-else-if="e.other_ru || e.other_ru != ''">{{
                    e.other_ru
                  }}</span>
                  <span v-else>{{ t.undef }}</span>
                </span>
                <span v-else>
                  <span v-if="e.other_ru || e.other_ru != ''">{{
                    e.other_en
                  }}</span>
                  <span v-else-if="e.other_en || e.other_en != ''">{{
                    e.other_ru
                  }}</span>
                  <span v-else>{{ t.undef }}</span>
                </span>
              </p>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="mx-4">
        <div class="emp-edu">
          <EmployeeEdu :e="e" class="mb-5" />
          <EmployeeLang :e="e" class="mb-5" />
          <EmployeeArmy :e="e" class="mb-5" />
          <EmployeeReward :e="e" class="mb-5" />
          <EmployeeExp :e="e" class="mb-5" />
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { DICTIONARY, eventBus, AUTH_DOMAIN } from "~/settings/settings";
import EmployeeEdu from "~/components/EmployeeEdu";
import EmployeeLang from "~/components/EmployeeLang";
import EmployeeArmy from "~/components/EmployeeArmy";
import EmployeeReward from "~/components/EmployeeReward";
import EmployeeExp from "~/components/EmployeeExp";
export default {
  layout: "dashboard",
  middleware: "auth",
  head() {
    return {
      title: "Candidate's data"
    };
  },
  components: {
    EmployeeEdu,
    EmployeeLang,
    EmployeeArmy,
    EmployeeReward,
    EmployeeExp
  },
  data() {
    return {
      e: {},
      requested: false,
      photo_1: null,
      photo_2: null,
      photo_3: null,
      photo_4: null
    };
  },
  computed: {
    ...mapState({
      lang: state => state.lang,
      countries: state => state.cmsData.countries
    }),
    t() {
      return DICTIONARY[this.lang];
    },
    domain() {
      return AUTH_DOMAIN;
    }
  },
  async asyncData({ $axios, params, redirect }) {
    try {
      const response = await $axios.get(
        "/api/v2/employees/employee/" + params.id
      );
      if (response.status == 200) {
        return {
          e: response.data,
          requested: false
        };
      } else {
        return {
          e: response.data,
          requested: true
        };
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status == 403) {
          redirect("/" + params.lang);
        }
      }
    }
  },
  methods: {
    deletePhoto(event) {
      var photo = event.target.dataset.photo;
      this.$axios
        .delete("/api/v2/ncd/employee/delete/photo/" + photo)
        .then(response => {
          if (response.status == 200) {
            this.e[photo] = null;
            eventBus.$emit("alert-success", response.data);
          }
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status == 400) {
              eventBus.$emit("alert-error", error.response.data);
            } else if (error.response.status == 403) {
              eventBus.$emit(
                "alert-error",
                "You have no privileges to delete it!"
              );
            } else {
              eventBus.$emit("alert-error", "Something went wrong!");
            }
          } else {
            eventBus.$emit("alert-error", "Something went wrong!");
          }
        });
    },
    uploadPhotos(data, modifier) {
      this.$axios
        .put("/api/v2/ncd/employee/update/photo", data)
        .then(response => {
          if (response.status == 200) {
            if (modifier == "photo_1") {
              this.e.photo_1 = this.domain + response.data;
            } else if (modifier == "photo_2") {
              this.e.photo_2 = this.domain + response.data;
            } else if (modifier == "photo_3") {
              this.e.photo_3 = this.domain + response.data;
            } else {
              this.e.photo_4 = this.domain + response.data;
            }
          }
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status == 400) {
              eventBus.$emit("alert-error", error.response.data);
            } else if (error.response.status == 403) {
              eventBus.$emit(
                "alert-error",
                "You have no privileges to delete it!"
              );
            } else {
              eventBus.$emit("alert-error", "Something went wrong!");
            }
          } else {
            eventBus.$emit("alert-error", "Something went wrong!");
          }
        });
    },
    changePhoto(event) {
      var photo = event.target.dataset.photo;
      var inputPhoto1 = document.querySelector(".photo_1");
      var inputPhoto2 = document.querySelector(".photo_2");
      var inputPhoto3 = document.querySelector(".photo_3");
      var inputPhoto4 = document.querySelector(".photo_4");
      if (photo == "photo_1") {
        inputPhoto1.click();
      } else if (photo == "photo_2") {
        inputPhoto2.click();
      } else if (photo == "photo_3") {
        inputPhoto3.click();
      } else if (photo == "photo_4") {
        inputPhoto4.click();
      } else {
        // pass
      }
    },
    changeFile(event) {
      var file = event.target.dataset.photo;
      if (file == "photo_1" && event.target.files) {
        let formData = new FormData();
        this.photo_1 = event.target.files[0];
        formData.append("photo_1", this.photo_1);
        this.uploadPhotos(formData, "photo_1");
      } else if (file == "photo_2" && event.target.files) {
        let formData = new FormData();
        this.photo_2 = event.target.files[0];
        formData.append("photo_2", this.photo_2);
        this.uploadPhotos(formData, "photo_2");
      } else if (file == "photo_3" && event.target.files) {
        let formData = new FormData();
        this.photo_3 = event.target.files[0];
        formData.append("photo_3", this.photo_3);
        this.uploadPhotos(formData, "photo_3");
      } else if (file == "photo_4" && event.target.files) {
        let formData = new FormData();
        this.photo_4 = event.target.files[0];
        formData.append("photo_4", this.photo_4);
        this.uploadPhotos(formData, "photo_4");
      } else {
        // pass
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.employee-images {
  overflow: hidden;
  width: 40%;
  padding: 0 25px;
  float: left;
}
.card-main {
  min-height: 1000px;
}
.main-info {
  font-size: 15px;
}
.badge-right {
  right: 0;
  position: absolute;
}
.main-info-container {
  width: 100%;
  clear: both;
  display: table;
  margin-bottom: 30px;
}

.v-card-reveal {
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.8);
  opacity: 1;
  transition: all 0.3s ease-in;
}

.v-card-reveal:not(.on-hover) {
  opacity: 0;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.8);
}

.buttons-image {
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
}

.files {
  position: absolute;
}
</style>
