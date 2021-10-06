<template>
    <div class="bg">

        <!-- ------------------------ code for the login part ------------------------ -->
        <h2>sdjasd</h2>
        <h4>Login here for the entire new world of shopping..</h4>
        <form @submit.prevent="submitAction">
            <div class="form-group" style="margin-top: 50px; margin-left: 20px; text-align: left; vertical-align: middle">
                <label for="userName">Username</label>
                <input type="text" style="margin-top: 10px; width:300px; margin-left: 10px; display:inline-block;" v-model="userName" name="userName" class="form-control" :class="{ 'is-invalid': submit && !userName }" />
                <div v-show="submit && !userName" class="invalid-feedback">UserName is mandatory</div>
            </div>
            <div class="form-group" style="margin-top: 20px; margin-left: 20px; text-align: left;">
                <label htmlFor="password">Password</label>
                <input type="password" style="margin-top: 10px; margin-left: 15px; width:300px; display:inline-block;" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submit && !password }" />
                <div v-show="submit && !password" class="invalid-feedback">Password is mandatory</div>
            </div>
            <div class="form-group" style="margin-top: 30px; margin-left: 150px;">
                <button class="btn btn-primary" v-on:click="onClickEvent()" >Login</button>
                <router-link to="/register" class="btn btn-link" style="color: white">Register</router-link>
            </div>
        </form>
    </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import { mapState, mapActions } from 'vuex'
export default {
    data () {
        return {
            //data will be fetched from here
            userName: '',
            password: '',
            submit: false
        }
    },
    computed: {
        ...mapState('userAcc', ['status'])
    },
    //writing methods for submit and login actions over here
    methods: {
        ...mapActions('userAcc', ['login', 'logout']),
        submitAction () {
            this.submit = true;
            const { userName, password } = this;
            if (userName && password) {
                this.login({ userName, password })
            }
        },
        onClickEvent(){
            window.location.href = "/home";
        }
    }
};
</script>
<style scoped>

/* code for the designing part of the page */
h2{
  color: transparent;
}
h4{
  color: white;
  margin-top: 180px;
}
label{
  color: white;
}
.bg{
  text-align: left;
  vertical-align: middle;
  background-image: url("../assets/login.jpeg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 800px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
</style>