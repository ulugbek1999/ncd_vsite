<template>
  <div>
    <div class="display-1 text-center mb-5 font-weight-bold">
      {{ t.applicant_data }}
    </div>
    <v-card class="px-5 py-9 card-main">
      <v-badge class="badge-right mr-5 mt-n4">{{ e.register_number }}</v-badge>
      <div class="main-info-container">
        <div class="employee-images mr-5">
          <v-row>
            <v-img
              v-if="e.photo_1"
              width="40%"
              :src="e.photo_1"
              aspect-ratio="0.75"
              alt="Photo 1"
            />
            <v-img
              v-else
              width="40%"
              :src="require('~/static/pages/photo_placeholder.png')"
              aspect-ratio="0.75"
              alt="Photo 1"
            />
            <v-spacer></v-spacer>
            <v-img
              v-if="e.photo_2"
              width="40%"
              :src="e.photo_2"
              aspect-ratio="0.75"
              alt="Photo 2"
            />
            <v-img
              v-else
              :src="require('~/static/pages/photo_placeholder.png')"
              width="40%"
              aspect-ratio="0.75"
              alt="Photo 2"
            />
          </v-row>
          <v-row class="mt-5">
            <v-img
              v-if="e.photo_3"
              width="40%"
              :src="e.photo_3"
              aspect-ratio="0.75"
              alt="Photo 3"
            />
            <v-img
              v-else
              :src="require('~/static/pages/photo_placeholder.png')"
              width="40%"
              aspect-ratio="0.75"
              alt="Photo 3"
            />
            <v-spacer></v-spacer>
            <v-img
              v-if="e.photo_4"
              width="40%"
              :src="e.photo_4"
              aspect-ratio="1.3334"
              alt="Photo 4"
            />
            <v-img
              v-else
              :src="require('~/static/pages/photo_placeholder.png')"
              width="40%"
              aspect-ratio="1.3334"
              alt="Photo 4"
            />
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
import { DICTIONARY, eventBus } from "~/settings/settings";
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
      title: "Applicant's data"
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
      e: {}
    };
  },
  computed: {
    ...mapState({
      lang: state => state.lang,
      countries: state => state.cmsData.countries
    }),
    t() {
      return DICTIONARY[this.lang];
    }
  },
  async asyncData({ $axios, params, redirect }) {
    try {
      const response = await $axios.get("/api/v2/employees/" + params.empid);
      return {
        e: response.data
      };
    } catch (error) {
      if (error.response) {
        if (error.response.status == 403) {
          redirect("/" + params.lang);
        }
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
</style>
