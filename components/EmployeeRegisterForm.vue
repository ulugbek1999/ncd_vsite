<template>
  <v-dialog
    v-model="employeeRegisterDialog"
    fullscreen
    hide-overlay
    transition="fade-transition"
    disabled
  >
    <v-card>
      <v-toolbar dark color="#000">
        <v-btn icon dark @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ t.registration }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="saveEmployeeForm"> {{ t.save }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list three-line subheader>
        <v-container class="py-12">
          <v-form v-model="validEmployeeForm">
            <v-list-item-title class="display-1 text-center font-weight-bold">{{
              t.emp_reg_form
            }}</v-list-item-title>
            <v-row class="mt-2 px-12">
              <span class="caption" style="color: #999;"
                >* - {{ t.required_fields }}</span
              >
            </v-row>
            <v-row>
              <v-col class="px-12">
                <v-text-field
                  v-model="employeeFormData.username"
                  :label="t.username + ' *'"
                  color="secondary"
                  required
                  :rules="rules.common"
                ></v-text-field>
                <v-text-field
                  v-model="employeeFormData.password"
                  :label="t.password + ' *'"
                  color="secondary"
                  required
                  :rules="rules.common"
                  type="password"
                ></v-text-field>
                <v-text-field
                  :label="t.confirm_password + ' *'"
                  color="secondary"
                  required
                  type="password"
                  :rules="passwordConfRule"
                ></v-text-field>
                <v-text-field
                  v-model="employeeFormData.fullname"
                  :label="t.fullname + ' *'"
                  required
                  :rules="rules.common"
                  color="secondary"
                >
                </v-text-field>
                <v-text-field
                  v-model="employeeFormData.email"
                  :label="t.email"
                  color="secondary"
                  :rules="emailRule"
                >
                </v-text-field>
                <v-text-field
                  v-model="employeeFormData.phone"
                  :rules="rules.phone"
                  :label="t.phone + ' *'"
                  color="secondary"
                >
                </v-text-field>
                <v-radio-group
                  v-model="employeeFormData.gender"
                  :label="t.gender + ':'"
                  row
                  required
                  :rules="genderRule"
                >
                  <v-radio :label="t.g_male" value="m"></v-radio>
                  <v-radio :label="t.g_female" value="f"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col class="px-12">
                <v-text-field
                  v-model="employeeFormData.passport_serial"
                  :label="t.passport_serial + ' *'"
                  color="secondary"
                  required
                  :rules="rules.common"
                >
                </v-text-field>
                <v-menu
                  v-model="menu1"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateIssueFormatted"
                      :label="t.date_of_issue + ' *'"
                      persistent-hint
                      prepend-inner-icon="mdi-calendar"
                      readonly
                      :rules="rules.common"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="employeeFormData.date_of_issue"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
                <v-menu
                  v-model="menu2"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="expiryDateFormatted"
                      :label="t.expiry_date + ' *'"
                      persistent-hint
                      prepend-inner-icon="mdi-calendar"
                      readonly
                      :rules="rules.common"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="employeeFormData.expiry_date"
                    no-title
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                <v-text-field
                  v-model="employeeFormData.tin"
                  :label="t.tin + ' *'"
                  color="secondary"
                ></v-text-field>
                <v-text-field
                  v-model="employeeFormData.place_of_residence"
                  :label="t.place_residence + ' *'"
                  color="secondary"
                  required
                  :rules="rules.common"
                >
                </v-text-field>
                <v-menu
                  v-model="menu3"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateOfBirthFormatted"
                      :label="t.birth_date + ' *'"
                      persistent-hint
                      prepend-inner-icon="mdi-calendar"
                      readonly
                      :rules="rules.common"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="employeeFormData.date_of_birth"
                    no-title
                    @input="menu3 = false"
                  ></v-date-picker>
                </v-menu>
                <v-text-field
                  v-model="employeeFormData.place_of_birth"
                  :label="t.place_birth + ' *'"
                  color="secondary"
                  required
                  :rules="rules.common"
                >
                </v-text-field>
                <v-file-input
                  :label="t.upload_avatar"
                  show-size
                  color="secondary"
                  accept="image/png, image/jpeg, image/bmp"
                  chips
                  :rules="rules.file"
                  prepend-icon="mdi-camera"
                  @change="selectFile"
                >
                </v-file-input>
              </v-col>
            </v-row>
            <v-row class="px-12"> </v-row>
            <v-row class="terms_of_use px-12">
              <v-checkbox
                v-model="employeeFormData.accepted"
                color="deep-purple"
                :rules="rules.checkbox"
              >
                <template v-if="lang == 'en'" v-slot:label>
                  I agree to the&nbsp;
                  <a href="#" @click.stop.prevent="$emit('openToU')"
                    >Terms of use</a
                  >&nbsp;*
                </template>
                <template v-else-if="lang == 'kz'" v-slot:label>
                  I agree to the&nbsp;
                  <a href="#" @click.stop.prevent="$emit('openToU')"
                    >Terms of use </a
                  >*
                </template>
                <template v-else-if="lang == 'uz'" v-slot:label>
                  I agree to the&nbsp;
                  <a href="#" @click.stop.prevent="$emit('openToU')"
                    >Terms of use </a
                  >*
                </template>
                <template v-else v-slot:label>
                  Я соглашаюсь с условиями&nbsp;
                  <a href="#" @click.stop.prevent="$emit('openToU')"
                    >Пользовательского соглашения </a
                  >*
                </template>
              </v-checkbox>
            </v-row>
            <div class="button-container">
              <v-btn
                tile
                color="secondary"
                :disabled="!employeeFormCanSend"
                @click="register"
                >{{ t.registration }}</v-btn
              >
            </div>
          </v-form>
        </v-container>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
import { eventBus } from "~/settings/settings";
import as from "~/services/AuthService";
export default {
  props: {
    lang: {
      type: String,
      required: true
    },
    t: {
      type: Object,
      required: true
    },
    employeeRegisterDialog: {
      type: Boolean,
      required: true
    },
    rules: {
      type: Object,
      required: true
    },
    validateFileInput: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      employeeFormData: {
        username: "",
        fullname: "",
        email: "",
        passport_serial: "",
        gender: "",
        date_of_issue: "",
        expiry_date: "",
        phone: "",
        tin: "",
        date_of_birth: "",
        place_of_residence: "",
        place_of_birth: "",
        password: "",
        accepted: false
      },
      validEmployeeForm: false,
      genderRule: [v => !!v || "You need to choose your gender!"],
      emailRule: [v => !v || /.+@.+\..+/.test(v) || "E-mail must be valid"],
      passwordConfRule: [
        v => v == this.employeeFormData.password || "Passwords do not match",
        v => !!v || "This is field is required"
      ],
      passwordR: [
        v => v.length > 8 || "Password should contain more that 8 symbols"
      ],
      formatedDate: this.formatDate(new Date().toISOString().substr(0, 10)),
      date: "",
      menu1: false,
      menu2: false,
      menu3: false,
      file: ""
    };
  },
  computed: {
    employeeFormCanSend() {
      if (!this.validEmployeeForm) {
        return false;
      }
      return true;
    },
    dateIssueFormatted() {
      return this.formatDate(this.employeeFormData.date_of_issue);
    },
    expiryDateFormatted() {
      return this.formatDate(this.employeeFormData.expiry_date);
    },
    dateOfBirthFormatted() {
      return this.formatDate(this.employeeFormData.date_of_birth);
    }
  },
  created() {
    eventBus.$on("employeeFormAccepted", () => {
      this.acceptEmployee();
    });
  },
  mounted() {
    this.checkLocalStorage();
  },
  methods: {
    saveEmployeeForm() {
      localStorage.setItem(
        "employee-form",
        JSON.stringify(this.employeeFormData)
      );
      this.$emit("close");
    },
    checkLocalStorage() {
      var employeeForm = localStorage.getItem("employee-form");
      if (localStorage.getItem("employee-form")) {
        this.employeeFormData = JSON.parse(employeeForm);
      }
    },
    acceptEmployee() {
      this.employeeFormData.accepted = true;
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    selectFile(event) {
      this.file = event;
    },
    register() {
      this.$nuxt.$loading.start();
      var formData = new FormData();
      for (const key in this.employeeFormData) {
        formData.append(key, this.employeeFormData[key]);
      }
      formData.append("file", this.file);

      as.registerEmployee(formData)
        .then(response => {
          if (response.status == 200) {
            eventBus.$emit("alert-success", response.data);
            this.signin();
            this.employerFormData = {
              company_name: "",
              boss_fullname: "",
              email: "",
              legal_address: "",
              register_number: "",
              person_fullname_for_hiring: "",
              phone: "",
              workers_amount: "",
              accepted: false
            };
            this.file = "";
            localStorage.removeItem("employer-form");
            eventBus.$emit("close-employer-form");
            this.resetValidation();
          }
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status == 400) {
              eventBus.$emit("alert-error", error.response.data);
            } else {
              eventBus.$emit("alert-error", error.message);
            }
          } else {
            eventBus.$emit("alert-error", "Something went wrong!");
          }
        })
        .finally(() => {
          this.$nuxt.$loading.finish();
        });
    },
    async signin() {
      this.$nuxt.$loading.start();
      try {
        await this.$auth.loginWith("local", {
          data: {
            username: this.employeeFormData.username,
            password: this.employeeFormData.password
          }
        });
        this.navigateToDashboard();
        this.menu = false;
      } catch (error) {
        if (error.response) {
          if (error.response.data) {
            eventBus.$emit("alert-error", error.response.data);
          } else {
            eventBus.$emit("alert-error", "Something went wrong!");
          }
        } else {
          eventBus.$emit("alert-error", "Something went wrong!");
        }
      } finally {
        this.$nuxt.$loading.finish();
      }
    },
    navigateToDashboard() {
      if (this.$auth.user.role == "employer") {
        this.$router.push({
          name: "lang-employer-dashboard-id-cabinet",
          params: {
            lang: this.lang,
            id: this.$auth.user.id
          }
        });
      } else if (this.$auth.user.role == "employee") {
        this.$router.push({
          name: "lang-employee-dashboard-id-cabinet",
          params: {
            lang: this.lang,
            id: this.$auth.user.id
          }
        });
      }
    }
  }
};
</script>
