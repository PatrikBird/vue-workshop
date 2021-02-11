<template>
  <p>{{ productName }}</p>
  <p>The <a v-bind:href="vueLink">Vue.js docs</a> are great.</p>
  <button v-on:click.alt="increment">Increment</button>
  <p>{{ counter }}</p>
  <input type="text" v-model="productName" />
  <button v-on:click="resetInput">Reset</button>
  <form v-on:submit.prevent="submitForm">
    <input type="text" />
    <button>Sign Up</button>
  </form>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      productName: "prtg",
      confirmedProductName: "",
      vueLink: "https://v3.vuejs.org/guide/introduction.html",
      counter: null,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    submitForm() {
      alert("submitted");
    },
    resetInput() {
      this.productName = "";
    },
  },
};
</script>
