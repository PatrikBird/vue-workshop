<template>
  <section id="events">
    <p>The <a v-bind:href="vueLink">Vue.js docs</a> are great.</p>
    <button v-on:click.left="increment">Increment</button>
    <p>Counter: {{ counter }}</p>
    <p>Product Name: {{ productName }}</p>
    <input type="text" v-model="productName" />
    <button v-on:click="resetInput">Reset</button>
    <form v-on:submit.prevent="submitForm">
      <input type="text" />
      <button>Sign Up</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      productName: "prtg",
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
