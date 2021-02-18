<template>
  <section id="events">
    <p>{{ productName }}</p>
    <p>The <a v-bind:href="vueLink">Vue.js docs</a> are great.</p>
    <button v-on:click="increment">Increment</button>
    <p>{{ counter }}</p>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    // data: function()
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
  },
};
</script>
