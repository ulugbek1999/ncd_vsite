<template>
  <div>
    <div class="display-1 text-center mb-5 font-weight-bold">
      {{ t.empr_personal_area }}
    </div>
    <v-card>
      <v-card-title>{{ t.personal_info }}</v-card-title>
      <v-dialog v-model="passwordDialog" max-width="20%">
        <template v-slot:activator="{ on }">
          <v-badge class="change-password"
            ><a href="#" v-on="on">{{ t.change_password }}</a></v-badge
          >
        </template>
        <v-card>
          <v-form ref="passFormRef" v-model="passForm">
            <v-card-title>{{ t.change_password }}</v-card-title>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="passwordFormData.old_password"
                    :rules="rules.common"
                    type="password"
                    label="Old password"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="passwordFormData.new_password"
                    label="New password"
                    :rules="rules.password"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="matchPassword"
                    label="Confirm password"
                    :rules="rules.match_password"
                    required
                    type="password"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="passwordDialog = false">
                {{ t.close }}</v-btn
              >
              <v-btn
                color="blue darken-1"
                text
                :disabled="!passForm"
                @click="saveNewPassword"
              >
                {{ t.save }}</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

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
import { DICTIONARY, eventBus } from "~/settings/settings";
// import as from "~/services/AuthService";
// import es from "~/services/EmployerService";
export default {
  layout: "dashboard",
  middleware: "auth",
  head() {
    return {
      title: "Dashboard"
    };
  },
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
      passForm: false,
      rules: {
        common: [v => !!v || "This field is required"],
        email: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        checkbox: [v => !!v || "You must agree to continue!"],
        number: [v => !!v || "Please, specify a valid number"],
        password: [
          v => v.length > 8 || "Password should contain more that 8 symbols"
        ],
        match_password: [
          v =>
            v == this.passwordFormData.new_password ||
            "Passwords do not match!",
          v => !!v || "This field is required"
        ]
      },
      passwordFormData: {
        old_password: "",
        new_password: ""
      },
      matchPassword: "",
      passwordDialog: false
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
  async asyncData({ $axios, params, redirect }) {
    try {
      const response = await $axios.get(
        "/api/v2/ncd/get/user/information/" + params.id
      );
      return {
        employerFormData: response.data
      };
    } catch (error) {
      if (error.response) {
        if (error.response.status == 403) {
          redirect("/" + params.lang);
        }
      }
    }
  },
  created() {
    if (this.$route.params.id != this.$auth.user.id) {
      this.$router.push({
        name: "/" + this.$route.params.lang
      });
    }
  },
  methods: {
    save() {
      this.$nuxt.$loading.start();
      this.$axios
        .put(
          `/api/v2/admin/employer/update/${this.$route.params.id}`,
          this.employerFormData
        )
        .then(response => {
          if (response.status == 200) {
            eventBus.$emit(
              "alert-success",
              "Your information has successfully been changed"
            );
          }
        })
        .catch(error => {
          eventBus.$emit("alert-error", error.message);
        })
        .finally(() => {
          this.$nuxt.$loading.finish();
        });
    },
    saveNewPassword() {
      this.$nuxt.$loading.start();
      this.$axios
        .put(
          `/api/v2/ncd/change/password/${this.$route.params.id}`,
          this.passwordFormData
        )
        .then(response => {
          if (response.status == 200) {
            eventBus.$emit(
              "alert-success",
              "Your password has successfully been changed"
            );
            this.passwordFormData = {
              old_password: "",
              new_password: ""
            };
            this.match_password = "";
            this.$refs.passFormRef.resetValidation();
            this.passwordDialog = false;
          }
        })
        .catch(error => {
          eventBus.$emit("alert-error", error.message);
        })
        .finally(() => {
          this.$nuxt.$loading.finish();
        });
    }
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
