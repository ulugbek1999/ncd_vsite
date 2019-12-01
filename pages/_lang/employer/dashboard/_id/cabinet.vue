<template>
  <div>
    <div class="display-1 text-center mb-5 font-weight-bold">
      {{ t.empr_personal_area }}
    </div>
    <v-card>
      <v-card-title>{{ t.personal_info }}</v-card-title>
      <v-badge class="change-password"
        ><a href="#">{{ t.change_password }}</a></v-badge
      >
      <v-form
        ref="form"
        v-model="validEmployerForm"
        enctype="multipart/form-data"
      >
        <v-row>
          <v-col class="px-12">
            <v-text-field
              v-model="employerFormData.company_name"
              :label="t.company_name"
              color="secondary"
              required
              :rules="rules.common"
            >
            </v-text-field>
            <v-text-field
              v-model="employerFormData.boss_fullname"
              :label="t.boss_fullname"
              required
              :rules="rules.common"
              color="secondary"
            >
            </v-text-field>
            <v-text-field
              v-model="employerFormData.email"
              :label="t.email"
              color="secondary"
              required
              :rules="rules.email"
            >
            </v-text-field>
            <v-text-field
              v-model="employerFormData.legal_address"
              :label="t.legal_address"
              color="secondary"
              required
              :rules="rules.common"
            >
            </v-text-field>
          </v-col>
          <v-col class="px-12">
            <v-text-field
              v-model="employerFormData.register_number"
              :label="t.register_number"
              :rules="rules.common"
              color="secondary"
              required
            ></v-text-field>
            <v-text-field
              v-model="employerFormData.person_fullname_for_hiring"
              :label="t.person_fullname_for_hiring"
              color="secondary"
              required
              :rules="rules.common"
            >
            </v-text-field>
            <v-text-field
              v-model="employerFormData.phone"
              :rules="rules.phone"
              :label="t.phone"
              color="secondary"
            >
            </v-text-field>
            <v-text-field
              v-model="employerFormData.workers_amount"
              :label="t.workers_amount"
              type="number"
              color="secondary"
              required
              :rules="rules.number"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <div class="button-container">
          <v-btn
            tile
            class="mb-5"
            color="secondary"
            :disabled="!employerFormCanSend"
            @click="save"
            >{{ t.save }}</v-btn
          >
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { DICTIONARY } from "~/settings/settings";
export default {
  layout: "dashboard1",
  middleware: "auth",
  data() {
    return {
      id: this.$route.params.id,
      employerFormData: {
        company_name: "",
        boss_fullname: "",
        email: "",
        legal_address: "",
        register_number: "",
        person_fullname_for_hiring: "",
        phone: "",
        workers_amount: "",
        accepted: false
      },
      validEmployerForm: false,
      rules: {
        common: [v => !!v || "This field is required"],
        email: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        checkbox: [v => !!v || "You must agree to continue!"],
        number: [v => !!v || "Please, specify a valid number"]
      }
    };
  },
  computed: {
    ...mapState({
      lang: state => state.lang
    }),
    t() {
      return DICTIONARY[this.lang];
    },
    employerFormCanSend() {
      if (!this.validEmployerForm) {
        return false;
      }
      return true;
    }
  },
  methods: {
    save() {}
  }
};
</script>

<style lang="scss">
.change-password {
  position: absolute;
  right: 30px;
  top: 25px;
}
</style>
