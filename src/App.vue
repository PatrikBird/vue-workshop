<template>
  <p>{{ productName }}</p>
  <p>The <a v-bind:href="vueLink">Vue.js docs</a> are great.</p>
</template>

<script>
export default {
  name: "App",
  data() {  // data: function()
    return {
      productName: "prtg",
      vueLink: "https://v3.vuejs.org/guide/introduction.html",
    };
  },
};
</script>
