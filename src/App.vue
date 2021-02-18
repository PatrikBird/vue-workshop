<template>
  <section id="events">
    <p>The <a v-bind:href="vueLink">Vue.js docs</a> are great.</p>
    <button v-on:click.left="increment">Increment</button>
    <p>Counter: {{ counter }}</p>
    <p>Product Name: {{ productName }}</p>
    <input
      type="text"
      v-on:input="setProductName"
      v-on:keyup.enter="SetConfirmedProductName"
      v-on:blur="SetConfirmedProductName"
    />
    <p>Confirmed: {{ confirmedProductName }}</p>
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
      confirmedProductName: "",
      vueLink: "https://v3.vuejs.org/guide/introduction.html",
      counter: null,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    setProductName(event) {
      this.productName = event.target.value;
    },
    submitForm() {
      alert("submitted");
    },
    SetConfirmedProductName() {
      this.confirmedProductName = this.productName;
    },
  },
};
</script>
