<template>
  <v-app>
    <div class="alert-container">
      <v-snackbar
        v-model="alert.error"
        color="error"
        class="alert"
        :timeout="3000"
        top
      >
        {{ alert.errorMessage }}
        <v-btn color="white" text @click="alert.error = false">
          Close
        </v-btn>
      </v-snackbar>
      <v-snackbar
        v-model="alert.success"
        color="success"
        class="alert"
        :timeout="3000"
        top
      >
        {{ alert.successMessage }}
        <v-btn color="white" text @click="alert.success = false">
          Close
        </v-btn>
      </v-snackbar>
    </div>
    <div class="dialogs-container">
      <SelectRoleDialog
        :roles="roles"
        :select-role-dialog="dialogs.selectRoleDialog"
        @proceedRegistration="proceedRegistration"
        @close="dialogs.selectRoleDialog = false"
      />
      <EmployerRegisterDialog
        :lang="lang"
        :t="t"
        :validate-file-input="validateFileInput"
        :rules="rules"
        :employer-register-dialog="dialogs.employerRegisterDialog"
        @close="dialogs.employerRegisterDialog = false"
        @openToU="dialogs.termsOfUseDialog = true"
        @closeToU="dialogs.termsOfUseDialog = false"
      />
      <EmployeeRegisterDialog
        :lang="lang"
        :t="t"
        :validate-file-input="validateFileInput"
        :rules="rules"
        :employee-register-dialog="dialogs.employeeRegisterDialog"
        @close="dialogs.employeeRegisterDialog = false"
        @openToU="dialogs.termsOfUseDialog = true"
        @closeToU="dialogs.termsOfUseDialog = false"
      />
      <v-dialog v-model="dialogs.termsOfUseDialog" width="700">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            {{ t.terms_of_use }}
          </v-card-title>
          <v-card-text v-html="termsOfUse"></v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text color="error" @click="dialogs.termsOfUseDialog = false">
              {{ t.close }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="acceptForm">
              {{ t.accept }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <NcdOverlay>
      <DocumentsList />
      <v-btn icon class="close" @click="closeOverlay">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </NcdOverlay>
    <NavBar
      :key="'nav-' + navbarKey"
      class="nav-desktop"
      :links="links"
    ></NavBar>
    <NavMobile :nav-items="links" :languages="languages"></NavMobile>
    <nuxt />
    <NcdFooter class="mt-10" :current-location="currentLocation"></NcdFooter>
  </v-app>
</template>

<script>
import NcdFooter from "~/components/Footer";
import NavMobile from "~/components/NavMobile";
import NavBar from "~/components/NavBar";
import NcdOverlay from "~/components/Overlay";
import DocumentsList from "~/components/DocumentsList";
import SelectRoleDialog from "~/components/SelectRoleDialog";
import EmployerRegisterDialog from "~/components/EmployerRegisterDialog";
import EmployeeRegisterDialog from "~/components/EmployeeRegisterForm";
import { eventBus, DICTIONARY } from "~/settings/settings";
import { mapState } from "vuex";

export default {
  middlerware: "language",
  components: {
    NavMobile,
    NavBar,
    NcdFooter,
    NcdOverlay,
    DocumentsList,
    SelectRoleDialog,
    EmployerRegisterDialog,
    EmployeeRegisterDialog
  },
  data() {
    return {
      links: [],
      languages: ["Ru", "En", "Kz", "Uz"],
      currentLocation: null,
      currentLanguage: this.$route.params.lang,
      alert: {
        success: false,
        successMessage: "Success",
        error: false,
        errorMessage: "Error"
      },
      navbarKey: 0,
      dialogs: {
        selectRoleDialog: false,
        employerRegisterDialog: false,
        employeeRegisterDialog: false,
        termsOfUseDialog: false
      },
      rules: {
        common: [v => !!v || "This field is required"],
        email: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        checkbox: [v => !!v || "You must agree to continue!"],
        number: [
          v => !!v || "Please, specify a valid number",
          v => v > 0 || "Number of workers should be more than 0!"
        ],
        file: [
          value =>
            !value ||
            this.validateFileInput(value) ||
            "Total size should be less than 5 MB!"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      lang: state => state.lang,
      extra: state => state.cmsData.extra
    }),
    t() {
      return DICTIONARY[this.lang];
    },
    roles() {
      return [this.t.employer, this.t.candidate];
    },
    termsOfUseCms() {
      return this.extra.filter(el => {
        return el.title_en == "Terms of use";
      });
    },
    termsOfUse() {
      // if (this.lang == "en") {
      //   return this.termsOfUseCms.content_en;
      // } else if (this.lang == "kz") {
      //   return this.termsOfUseCms.content_kz;
      // } else if (this.lang == "uz") {
      //   return this.termsOfUseCms.content_uz;
      // } else {
      // }
      return this.termsOfUseCms[0].content_ru;
    }
  },
  watch: {},
  mounted() {
    this.$nextTick(() => {
      this.$store.commit("CHANGE_LANGUAGE", this.$route.params.lang);
      this.resolveLinks().then(() => {
        this.links = [
          {
            name: this.t.services,
            link: "/" + this.lang + "#services",
            scrollable: true,
            overlay: false
          },
          {
            name: this.t.about_company,
            link: "/" + this.lang + "#about",
            scrollable: true,
            overlay: false
          },
          {
            name: this.t.vacancies,
            link: `/${this.lang}/vacancies`,
            scrollable: false,
            overlay: false
          },
          {
            name: this.t.documents,
            link: "",
            scrollable: false,
            overlay: true
          },
          {
            name: this.t.faq,
            link: `/${this.lang}/questions`,
            scrollable: false,
            overlay: false
          },
          {
            name: this.t.contacts,
            link: "/" + this.lang + "#contacts",
            scrollable: true,
            overlay: false
          }
        ];
      });
    });
  },
  created() {
    eventBus.$on("alert-success", message => {
      this.alert.successMessage = message;
      this.alert.success = true;
    });
    eventBus.$on("alert-error", message => {
      this.alert.errorMessage = message;
      this.alert.error = true;
    });
    eventBus.$on("change-lang", l => {
      this.links = [
        {
          name: DICTIONARY[l].services,
          link: "/" + this.lang + "#services",
          scrollable: true,
          overlay: false
        },
        {
          name: DICTIONARY[l].about_company,
          link: "/" + this.lang + "#about",
          scrollable: true,
          overlay: false
        },
        {
          name: DICTIONARY[l].vacancies,
          link: `/${this.lang}/vacancies`,
          scrollable: false,
          overlay: false
        },
        {
          name: DICTIONARY[l].documents,
          link: "",
          scrollable: false,
          overlay: true
        },
        {
          name: DICTIONARY[l].faq,
          link: `/${this.lang}/questions`,
          scrollable: false,
          overlay: false
        },
        {
          name: DICTIONARY[l].contacts,
          link: "/" + this.lang + "#contacts",
          scrollable: true,
          overlay: false
        }
      ];
    });
    eventBus.$on("show-role-dialog", () => {
      this.dialogs.selectRoleDialog = !this.dialogs.selectRoleDialog;
    });
    eventBus.$on("close-employer-form", () => {
      this.closeEmployerDialog();
    });
  },
  methods: {
    async resolveLinks() {
      this.currentLocation = this.$router.resolve({
        name: "lang",
        params: { lang: this.currentLanguage }
      }).href;
    },
    closeOverlay() {
      eventBus.$emit("overlay", false);
    },
    closeEmployerDialog() {
      this.dialogs.employerRegisterDialog = false;
    },
    proceedRegistration(data) {
      if (data.valid) {
        if (data.selectedRole == this.roles[2]) {
          this.alert.errorMessage =
            "You can't register as a student yet! Sorry for that :(";
          this.alert.error = true;
        } else if (data.selectedRole == this.roles[1]) {
          this.dialogs.employeeRegisterDialog = true;
        } else {
          this.dialogs.employerRegisterDialog = true;
        }
        this.dialogs.selectRoleDialog = false;
      } else {
        this.alert.errorMessage = "You need to select a role!";
        this.alert.error = true;
      }
    },
    validateFileInput(value) {
      var fileSize = 0;
      if (value.length) {
        value.forEach(el => {
          fileSize += el.size;
        });
      } else {
        fileSize = value.size;
        if (value.size) {
          if (fileSize < 5000000) {
            return true;
          }
        } else {
          return true;
        }
      }
      if (fileSize < 5000000) {
        return true;
      } else return false;
    },
    acceptForm() {
      if (this.dialogs.employerRegisterDialog)
        eventBus.$emit("employerFormAccepted");
      else eventBus.$emit("employeeFormAccepted");
      this.dialogs.termsOfUseDialog = false;
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style lang="scss" src="~/assets/main.scss"></style>
<style lang="scss" src="~/assets/responsive.scss"></style>
<style lang="scss" src="~/assets/animations.scss"></style>
