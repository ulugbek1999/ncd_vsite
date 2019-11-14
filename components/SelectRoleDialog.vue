<template>
  <div>
    <v-dialog
      v-model="selectRoleDialog"
      class="select-role-dialog"
      max-width="500px"
    >
      <v-card>
        <v-form v-model="validSelectRole">
          <v-card-title>
            <span>{{ t.select_role }}</span>
          </v-card-title>
          <v-card-text>
            <v-select
              v-model="selectedRole"
              :items="roles"
              :label="t.select_from_list"
              item-value="text"
              :rules="selectRoleRule"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="$emit('close')">
              {{ t.close }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text color="success" @click="register">{{
              t.registration
            }}</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { DICTIONARY } from "~/settings/settings";
export default {
  props: {
    roles: {
      type: Array,
      required: true
    },
    selectRoleDialog: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      selectedRole: "",
      selectRoleRule: [v => !!v || "Please, select a role"],
      validSelectRole: false,
      lang: this.$route.params.lang
    };
  },
  computed: {
    t() {
      return DICTIONARY[this.lang];
    }
  },
  methods: {
    close() {
      this.$emit("closeRDdialog");
    },
    register() {
      this.$emit("proceedRegistration", {
        valid: this.validSelectRole,
        selectedRole: this.selectedRole
      });
    }
  }
};
</script>
