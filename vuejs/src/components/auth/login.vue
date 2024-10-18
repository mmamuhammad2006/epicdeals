<template>
  <section class="background-radial-gradient overflow-hidden">
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
          <h1 class="my-5 display-5 fw-bold ls-tight text-white">
            The best offer <br />
            <span class="text-sky">for your business</span>
          </h1>
          <p class="mb-4 opacity-70 text-gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, expedita iusto veniam atque, magni tempora mollitia
            dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab
            ipsum nisi dolorem modi. Quos?
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div
            id="radius-shape-1"
            class="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            class="position-absolute shadow-5-strong"
          ></div>

          <div class="card bg-gray">
            <div class="card-body px-4 py-5 px-md-5">
              <div class="head">
                <div class="col-12">
                  <h3 class="m-0 pb-4 text-sky fw-bold text-center">
                    Login
                  </h3>
                </div>
              </div>
              <div  class="error pb-3">
                <div class="col1">
                  <h3 class="m-0 text-danger fs-5 fw-bold text-start">{{ data.error['data'] }}</h3>
                </div>
              </div>
              <form @submit.prevent="login">
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div data-mdb-input-init class="form-outline mb-4">
                  <label class="form-label text-black text-start w-100" for="form3Example3"
                    >Email address</label
                  >
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control"
                    v-model="data.form.email"
                    required
                  />
                </div>

                <!-- Password input -->
                <div data-mdb-input-init class="form-outline mb-4">
                  <label class="form-label text-black text-start w-100" for="form3Example4"
                    >Password</label
                  >
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control"
                    v-model="data.form.password"
                    required
                  />
                </div>

                <!-- Submit button -->
                <div class="bttn">
                  <div class="col-12">
                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      class="btn bg-secondary text-white btn-block w-100 mb-4"
                    >
                      login
                    </button>
                  </div>
                </div>

                <!-- login buttons -->
                <div class="text-center">
                  <p>Create an account?: <router-link :to="{ name: 'register'}"> Register</router-link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { expressLogin } from "../../services/authService.js";
import { ref } from "vue";
import { useRouter  } from 'vue-router';
const router = useRouter();
const data = ref({
  form: {
    email: "",
    password: "",
  },
  error: ''
});


const login = async () => {
  try {
    const response = await expressLogin(data.value.form);
    console.log("login try function gets:", response);
    data.value.error = ''
    router.push({name: 'home'})
  } catch (err) {
    data.value.error = err['response']
    console.error("login catch function",data.value.error);
  }
};
</script>

