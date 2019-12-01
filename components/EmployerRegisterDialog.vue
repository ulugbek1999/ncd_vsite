<template>
  <v-dialog
    v-model="employerRegisterDialog"
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
          <v-btn dark text @click="saveEmployerForm"> {{ t.save }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list three-line subheader>
        <v-container class="py-12">
          <v-form
            ref="form"
            v-model="validEmployerForm"
            enctype="multipart/form-data"
          >
            <v-list-item-title class="display-1 text-center font-weight-bold">{{
              t.empr_reg_form
            }}</v-list-item-title>
            <v-row class="mt-2 px-12">
              <span class="caption" style="color: #999;"
                >* - {{ t.required_fields }}</span
              >
            </v-row>
            <v-row>
              <v-col class="px-12">
                <v-tooltip
                  bottom
                  transition="slide-y-reverse-transition"
                  max-width="400px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="employerFormData.company_name"
                      :label="t.company_name + ' *'"
                      color="secondary"
                      required
                      :rules="rules.common"
                      v-on="on"
                    >
                    </v-text-field>
                  </template>
                  <span>{{ t.company_name_tip }}</span>
                </v-tooltip>
                <v-text-field
                  v-model="employerFormData.boss_fullname"
                  :label="t.boss_fullname + ' *'"
                  required
                  :rules="rules.common"
                  color="secondary"
                >
                </v-text-field>
                <v-text-field
                  v-model="employerFormData.email"
                  :label="t.email + ' *'"
                  color="secondary"
                  required
                  :rules="rules.email"
                >
                </v-text-field>
                <v-text-field
                  v-model="employerFormData.legal_address"
                  :label="t.legal_address + ' *'"
                  color="secondary"
                  required
                  :rules="rules.common"
                >
                </v-text-field>
              </v-col>
              <v-col class="px-12">
                <v-tooltip
                  bottom
                  transition="slide-y-reverse-transition"
                  max-width="400px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="employerFormData.register_number"
                      :label="t.register_number + ' *'"
                      :rules="rules.common"
                      color="secondary"
                      required
                      v-on="on"
                    >
                    </v-text-field>
                  </template>
                  <span>{{ t.register_number_tip }}</span>
                </v-tooltip>
                <v-tooltip
                  bottom
                  transition="slide-y-reverse-transition"
                  max-width="400px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="employerFormData.person_fullname_for_hiring"
                      :label="t.person_fullname_for_hiring + ' *'"
                      color="secondary"
                      required
                      :rules="rules.common"
                      v-on="on"
                    >
                    </v-text-field>
                  </template>
                  <span>{{ t.person_fullname_for_hiring_tip }}</span>
                </v-tooltip>
                <v-text-field
                  v-model="employerFormData.phone"
                  :rules="rules.phone"
                  :label="t.phone + ' *'"
                  color="secondary"
                >
                </v-text-field>
                <v-text-field
                  v-model="employerFormData.workers_amount"
                  :label="t.workers_amount + ' *'"
                  type="number"
                  color="secondary"
                  required
                  :rules="rules.number"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row class="px-12">
              <v-file-input
                ref="empfiles"
                :label="t.choose_files"
                show-size
                counter
                color="secondary"
                accept
                chips
                :rules="rules.file"
                multiple=""
                @change="selectFiles"
              >
              </v-file-input>
            </v-row>
            <v-row class="terms_of_use px-12">
              <v-checkbox
                v-model="employerFormData.accepted"
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
                :disabled="!employerFormCanSend"
                @click="send"
                >{{ t.send }}</v-btn
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
    employerRegisterDialog: {
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
      files: []
    };
  },
  computed: {
    employerFormCanSend() {
      if (!this.validEmployerForm) {
        return false;
      }
      return true;
    }
  },
  created() {
    eventBus.$on("employerFormAccepted", () => {
      this.acceptEmployer();
    });
  },
  mounted() {
    this.checkLocalStorage();
  },
  methods: {
    saveEmployerForm() {
      localStorage.setItem(
        "employer-form",
        JSON.stringify(this.employerFormData)
      );
      this.$emit("close");
    },
    checkLocalStorage() {
      var employerForm = localStorage.getItem("employer-form");
      if (localStorage.getItem("employer-form")) {
        this.employerFormData = JSON.parse(employerForm);
      }
    },
    acceptEmployer() {
      this.employerFormData.accepted = true;
    },
    selectFiles(event) {
      this.files = [];
      const files = event;
      this.files = [...this.files, ...files];
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    send() {
      this.$nuxt.$loading.start();
      var formData = new FormData();
      for (const key in this.employerFormData) {
        formData.append(key, this.employerFormData[key]);
      }
      if (this.files.length > 0) {
        this.files.forEach(element => {
          formData.append("files", element);
        });
      }
      as.registerEmployer(formData)
        .then(response => {
          if (response.status == 201) {
            var message =
              "Thank you! We will soon send your credentials to your email.";
            eventBus.$emit("alert-success", message);
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
            this.files = [];
            localStorage.removeItem("employer-form");
            eventBus.$emit("close-employer-form");
            this.resetValidation();
          }
        })
        .catch(error => {
          eventBus.$emit("alert-error", error);
        })
        .finally(() => {
          this.$nuxt.$loading.finish();
        });
    }
  }
};
</script>
