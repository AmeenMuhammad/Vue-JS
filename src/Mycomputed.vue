<template>
  <h1>My Computed file work</h1>
  <!-- <p>{{ User.length % 2 === 0 ? "Evenn" : "Odd" }}</p> 1st option check  -->
  <p>{{ isUserVule() }}</p>
  <p>{{ isUserVule() }}</p>
  <p>{{ isUserVule() }}</p>

  <h2>Computed Function call</h2>

  <p>{{ isComputedUser }}</p>
  <p>{{ isComputedUser }}</p>
  <p>{{ isComputedUser }}</p>

  <button @click="addMoreUser">Add More users{{ addMoreUser }}</button>

  <button @click="count++">Count User {{ count }}</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      User: [
        {
          id: 1,
          name: "Ameen Muhammad",
          email: "ameen@gmail.com",
          address: "Krachi",
        },
        {
          id: 2,
          name: "Ali Ahemd",
          email: "aliahmed@gmail.com",
          address: "Badin",
        },
        {
          id: 3,
          name: "Sarfraz Ahmed",
          email: "sarfraz@gmail.com",
          address: "badin",
        },
        {
          id: 4,
          name: "Sansar Ahmed",
          email: "ameen@gmail.com",
          address: "Badin",
        },
        {
          id: 5,
          name: "Asgher",
          email: "ameen@gmail.com",
          address: "Nindo",
        },
        {
          id: 6,
          name: "Asalam",
          email: "ameen@gmail.com",
          address: "karachi",
        },
      ],
    };
  },

  computed: {
    isComputedUser() {
      console.log("computed Call");
      return this.User.length % 2 === 0 ? "Even" : "Odd";
    },
  },
  methods: {
    isUserVule() {
      console.log("method call");
      return (this.User.length + this.count) % 2 === 0 ? "even" : "odd";
    },
    addMoreUser() {
      this.push({
        id: 7,
        name: "anwar",
        email: "anwar@gmail.com",
        address: "krachi",
      });
    },
  },
};
</script>

<style></style>
