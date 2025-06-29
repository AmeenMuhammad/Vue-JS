<template>
  <div class="home">
    <h1>{{ greeting }}</h1>

    <h1>{{ ageValidator() }}</h1>

    <h2>{{ agevalidaterComputed }}</h2>
    <p>{{ input }}</p>
    <label>Age:</label>
    <input type="number" value="age" placeholder="enter Age:" />

    <br />
    <label>Name:</label>
    <input type="text" v-model="name" placeholder="Enter your Name" />
    <p>{{ name }}</p>

    <labe>Email</labe>
    <input type="text" v-model="emal" placeholder="Enter your Email" />

    <br />
    <label>Check Box</label>
    <input type="checkbox" value="submit" />
    <br />
    <input type="color" name="color" id="" />
    <br />
    <input type="date" />
    <p>{{ email }}</p>

    <button @click="goToUsers" class="btn">{{ buttonText }}</button>
    <br />
    <button @click="gotofile" class="btn">{{ filetext }}</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ROUTES } from "../constants/routes.js";

export default defineComponent({
  name: "Home",
  data() {
    return {
      input: "",
      name: "",
      email: "",
      age: 20, // Example default age, adjust as needed
    };
  },
  computed: {
    agevalidaterComputed() {
      const newage = this.age;
      if (newage >= 18) {
        return "you are eligible for vote";
      } else if (newage < 18 && newage > 10) {
        return "you are not eligible";
      } else {
        return "not allowed for vote";
      }
    },
    greeting() {
      return "Hello";
    },
    buttonText() {
      return "Go to Users";
    },
    filetext() {
      return "Go to Login file";
    },
  },
  methods: {
    ageValidator() {
      const myAge = this.age;
      if (myAge >= 18) {
        return "you are Adult on driving";
      } else if (myAge < 18 && myAge > 10) {
        return "you are child not allow for driving";
      } else {
        return "not Allowed for driving your age less than 10 years";
      }
    },
    goToUsers() {
      this.$router.push(ROUTES.USERS);
    },
    gotofile() {
      this.$router.push(ROUTES.files);
    },
  },
});
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

h1 {
  font-size: 4rem;
  margin-bottom: 2rem;
  color: #42b883;
}
h2 {
  font-size: 4rem;
  margin-bottom: auto;
  color: red;
}
input {
  border-color: yellowgreen;
  box-sizing: border-box;
  border-radius: 10px;
}
.btn {
  padding: 12px 24px;
  font-size: 1.2rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #369870;
}
</style>
