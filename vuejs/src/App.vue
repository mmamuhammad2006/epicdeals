<script setup>
import { onMounted } from 'vue';
import axios from 'axios';
import login from './components/auth/login.vue'
import home from './components/home.vue'
import register from './components/auth/register.vue'

const getData = () =>{
  axios.get('http://localhost:5000/get-data')
  .then(response => console.log(response))
  .catch(error => console.error("axios error is: "+error));
}

onMounted(()=>{
  getData();
})
</script>

<template>
  <router-link to="/home">Home</router-link>
  <router-link to="/login">Login</router-link>
  <router-link to="/register">Register</router-link>
  <!-- <header> -->
      <!-- <login/> --> 
       <router-view></router-view>
  <!-- </header> -->

  <main>
  </main>
</template>

<style lang="scss"> //removed scope so that this scss file applies for all child components of App.vue  
@import './public/css/style.scss';
</style>
