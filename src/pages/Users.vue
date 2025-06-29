<template>
  <h2>Register form</h2>
  <div class="hero">
    <div class="form-box">
      <div class="button-box">
        <div id="btn"></div>
        <button @click="toggleForm('login')" class="toggle-btn">Login</button>
        <button @click="toggleFrom('register')" class="toggle-btn">Register</button>
      </div>
      <div class="social-icons">
        <img src="/images/facebook.png" alt="facebook" />
        <img src="/images/amazon.png" alt="twiter" />
        <img src="/images/twiter2.webp" alt="sanpcaht" />
      </div>
      <form
        v-show="activeForm === 'login'"
        @submit.prevent="handleLogin"
        class="input-group"
      >
        <input v-model="id" class="input-field" placeholder="Eter User ID" required />
        <br />
        <input
          v-model="password"
          type="password"
          class="input-field"
          placeholder="Enter Password"
        />
        <br />
        <input type="checkbox" class="check-box" /> <span>Rememeber Password</span>
        <button type="submit" class="submit-btn">Login</button>
      </form>
      <form
        v-show="activeForm === 'register'"
        @submit.prevent="handleRegister"
        class="input-group"
      >
        <input v-model="name" class="input-field" placeholder="Enter Name" required />
        <input v-model="email" class="input-field" placeholder="Enter Eamil" required />
        <input v-model="password" class="input-field" placeholder="password" required />
        <button type="submit" class="submit-btn">Register</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineComponent } from "vue";
import { ROUTES } from "../constants/routes.js";

const activeForm = ref("login");
const id = ref("");
const name = ref("");
const email = ref("");
const password = ref("");

function toggleFrom(formType) {
  activeForm.value = formType;
}
function handleLogin() {
  alert(`logging in with ID: ${id.value} and password: ${password.value}`);
}
function handleRegister() {
  alert(`Registering ${name.value} (${email.value})`);
}

var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
.hero {
  height: 100%;
  width: 100%;
  background-color: #ff1060c0;
  background-position: center;
  background-size: cover;
  position: absolute;
}
.form-box {
  width: 400px;
  height: 500px;
  position: relative;
  margin: 8% auto;
  background: white;
  padding: 7px;
  overflow: hidden;
}
.button-box {
  width: 220px;
  margin: 33px auto;
  position: relative;
  box-shadow: 0 0 20px 9px #130803ee;
  border-radius: 30px;
}
.toggle-btn {
  padding: 10px 30px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}
#btn {
  top: 0;
  left: 0;
  position: absolute;
  width: 110px;
  height: 110%;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border-radius: 30px;
  transition: 0.5s;
}
.social-icons {
  margin: 30px auto;
  text-align: center;
}
.social-icons img {
  width: 30px;
  height: 30%;
  margin: 0 12px;
  box-shadow: 0 0 20px 0 #241616e0;
  cursor: pointer;
  border-radius: 50%;
}
.input-group {
  top: 180px;
  position: absolute;
  width: 280px;
  transition: 0.5s;
}
.input-field {
  width: 100%;
  padding: 10px 0;
  margin: 5px o;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid#999;
  outline: none;
  background: transparent;
}
.submit-btn {
  width: 85%;
  padding: 10px 30px;
  cursor: pointer;
  display: block;
  margin: auto;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
}
.check-box {
  margin: 30px 10px 30px;
}
span {
  color: #777;
  font-size: 12px;
  bottom: 68px;
  position: absolute;
}
#login {
  left: 50px;
}
#register {
  left: 450px;
}
</style>
