<template>
    <v-layout
      column
      justify-center
      align-center  
    >
        <h1>Registration form</h1>
        <form action="">
            <div>
                <label for="subject">Company name</label>
                <input type="text" v-model="regForm.company_name" name="company_name" id="company-name">
            </div>
            <div>
                <label for="fullname">Fullname (first head)</label>
                <input type="text" v-model="regForm.boss_fullname" name="fullname" id="fullname">
            </div>
            <div>
                <label for="email">Email</label>
                <input type="text" v-model="regForm.email" name="fullname" id="email">
            </div>
            <div>
                <label for="legal-address">Legal address</label>
                <input type="text" v-model="regForm.legal_address" name="legal_address" id="legal-address">
            </div>
            <div>
                <label for="reg-number">Registration number</label>
                <input type="text" v-model="regForm.register_number" name="fullname" id="reg-number">
            </div>
            <div>
                <label for="fullname-res">Fullname (responsible person)</label>
                <input type="text" v-model="regForm.person_fullname_for_hiring" name="fullname" id="fullname-res">
            </div>
            <div>
                <label for="phone">Phone</label>
                <input type="text" v-model="regForm.phone" name="fullname" id="phone">
            </div>
            <div>
                <label for="number-of-emp">Number of employees</label>
                <input type="text" v-model="regForm.workers_amount" name="fullname" id="number-of-emp">
            </div>
            <div>
                <v-file-input label="File input"></v-file-input>
            </div>
            <v-btn color="green" @click="register">Register</v-btn>
        </form>
    </v-layout>
</template>

<script>
import auth from '~/services/AuthService.js'
import {eventBus} from '~/services/EventBus.js'
export default {
    layout: 'simple',
    data() {
        return {
            regForm: {
                company_name: '',
                boss_fullname: '',
                email: '',
                legal_address: '',
                register_number: '',
                person_fullname_for_hiring: '',
                phone: '',
                workers_amount: ''
            }
        }
    },
    methods: {
        register () {
            this.$nuxt.$loading.start()
            auth.registerPartner(this.regForm)
        }
    },
    created () {
        eventBus.$on('loading', data => {
            this.$nuxt.$loading.finish()
        })
    }
}
</script>

<style scoped>
input {
    border: 1px solid black;
    margin-top: 15px;
}
</style>