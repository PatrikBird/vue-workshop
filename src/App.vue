<template>
  <p>{{ productName }}</p>
  <p>The <a v-bind:href="vueLink">Vue.js docs</a> are great.</p>
  <button v-on:click.alt="increment">Increment</button>
  <p>{{ counter }}</p>
  <label><input type="text" v-model="productName"/></label>
  <button v-on:click="resetInput">Reset</button>
  <form v-on:submit.prevent="submitForm">
    <label><input type="text"/></label>
    <button>Sign Up</button>
  </form>
  <!--  <p>Some Name: {{ productName + " " + "XL5" }}</p>-->
  <p>Some Name {{ someName }}</p>
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
  computed: {
    someName() {
      return this.productName + " " + "XL5";
    },
  },
  watch: {
    counter(value) {
      if (value > 4) {
        const that = this; // arrow function to the rescue
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
      }
    },
  },
};
</script>
