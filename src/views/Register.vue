<template>
    <div class="bg">
        <h3>sdjasd</h3>
        <h2>Register</h2>
        <!-- <div> -->
        <form @submit.prevent="accountSubmit">
            <div style="margin-top: 10px; text-align: center; display:flex;">
            <div class="form-group" style="width: 500px; margin-left: 500px ; background-color: lightblue;">
                <label for="firstName">First Name</label>
                <input type="text" v-model="user.firstName" v-validate="'required'" name="firstName" class="form-control" :class="{ 'is-invalid': submit && errors.has('firstName') }" />
                <div v-if="submit && !firstName && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>
            </div>
            <div class="form-group" style="margin-left: 20px; margin-righht: 20px; width: 500px;  background-color: lightblue;">
                <label for="lastName">Last Name</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submit && errors.has('lastName') }" />
                <div v-if="submit && errors.has('lastName')" class="invalid-feedback">{{ errors.first('lastName') }}</div>
            </div>
            </div>
            <div style="margin-top: 10px; text-align: center; display:flex;">
            <div class="form-group" style="width: 500px; margin-left: 500px;  background-color: lightblue;">
                <label for="lastName">Email</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submit && errors.has('email') }" />
                <div v-if="submit && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
            </div>
            <div class="form-group" style="margin-left: 20px; margin-righht: 20px; width: 500px;  background-color: lightblue;">
                <label for="lastName">Phone Number</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submit && errors.has('phoneNum') }" />
                <div v-if="submit && errors.has('phoneNum')" class="invalid-feedback">{{ errors.first('phoneNum') }}</div>
            </div>
            </div>
            <div style="margin-top: 10px; text-align: center; display:flex;">
            <div class="form-group" style="width: 500px; margin-left: 500px;  background-color: lightblue;">
                <label for="lastName">Address 1</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submit && errors.has('address1') }" />
                <div v-if="submit && errors.has('address1')" class="invalid-feedback">{{ errors.first('address1') }}</div>
            </div>
            <div class="form-group" style="margin-left: 20px; margin-righht: 20px; width: 500px;  background-color: lightblue;">
                <label for="lastName">Address 2</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submit && errors.has('address2') }" />
                <div v-if="submit && errors.has('address2')" class="invalid-feedback">{{ errors.first('address2') }}</div>
            </div>
            </div>
            <div style="margin-top: 10px; text-align: center; display:flex;">
            <div class="form-group" style="width: 500px; margin-left: 500px;  background-color: lightblue;">
                <label for="lastName">City</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submit && errors.has('city') }" />
                <div v-if="submit && errors.has('city')" class="invalid-feedback">{{ errors.first('city') }}</div>
            </div>
            <div class="form-group" style="margin-left: 20px; margin-righht: 20px; width: 500px;  background-color: lightblue;">
                <label for="lastName">Country</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submit && errors.has('country') }" />
                <div v-if="submit && errors.has('country')" class="invalid-feedback">{{ errors.first('country') }}</div>
            </div>
            </div>
            <div style="margin-top: 10px; text-align: center; display:flex;">
            <div class="form-group" style="width: 500px; margin-left: 500px;  background-color: lightblue;">
                <label for="lastName">State/Province</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submit && errors.has('province') }" />
                <div v-if="submit && errors.has('province')" class="invalid-feedback">{{ errors.first('province') }}</div>
            </div>
            <div class="form-group" style="margin-left: 20px; margin-righht: 20px; width: 500px;  background-color: lightblue;">
                <label for="lastName">Postal Code</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submit && errors.has('postalCd') }" />
                <div v-if="submit && errors.has('postalCd')" class="invalid-feedback">{{ errors.first('postalCd') }}</div>
            </div>
            </div>
            <div style="margin-top: 10px; text-align: center; display:flex;">
            <div class="form-group" style="width: 500px; margin-left: 500px;  background-color: lightblue;">
                <label for="username">Username</label>
                <input type="text" v-model="user.username" v-validate="'required'" name="username" class="form-control" :class="{ 'is-invalid': submit && errors.has('username') }" />
                <div v-if="submit && errors.has('username')" class="invalid-feedback">{{ errors.first('username') }}</div>
            </div>
            <div class="form-group" style="margin-left: 20px; margin-righht: 20px; width: 500px;  background-color: lightblue;">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" class="form-control" :class="{ 'is-invalid': submit && errors.has('password') }" />
                <div v-if="submit && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
            </div>
            </div>
            <div class="form-group" style="margin-top: 20px;">
                <button class="btn btn-primary">Register</button>
                <router-link to="/login" class="btn btn-link">Cancel</router-link>
            </div>
        </form>
        <!-- </div> -->
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions } from 'vuex'
export default {
    data () {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNum: '',
                address1: '',
                address2: '',
                city: '',
                country: '',
                province: '',
                postalCd: '',
                username: '',
                password: ''
            },
            submit: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        accountSubmit() {
            this.submit = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user);
                }
            });
        }
    }
};
</script>
<style scoped>
h3{
  color: transparent;
}
h2{
  /* color: white; */
  margin-top: 20px;
  margin-bottom: 20px;
}
/* label{
  color: white;
} */
.bg{
  /* text-align: left; */
  vertical-align: middle;
  background-image: url("../assets/register.jpeg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 800px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  text-align: center;
}
</style>