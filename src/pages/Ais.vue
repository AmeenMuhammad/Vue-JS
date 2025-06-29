<template>
  <!-- using methods here -->   
  <h1>API APP || Todo List</h1>
  <div v-for="users in ans" :key="users.id">
    <p>{{ users.userId }} - {{ users.id }} - {{ users.completed }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ROUTES } from "../constants/routes.js";
import axios from "axios";
export default defineComponent({
  name: "Ais",
  data() {
    return {
      ans: [],
    };
  },

  async mounted() {
    this.getTodos();
  },
  methods: {
    async getTodos() {
      const myUrl = "https://jsonplaceholder.typicode.com/todos";
      const myResponse = await axios.get(myUrl);
      console.log("mrrarasrsa", myResponse.data);
      this.ans = myResponse.data;
    },
  },
});
</script>
<style></style>