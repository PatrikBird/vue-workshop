<template>
  <section>
    FILTER
  </section>
  <section>
    <div class="controls">
      <router-link to="/register">Register</router-link>
    </div>
    <ul v-if="!hasPeople">
      <li v-for="p in filteredPeople" :key="p.id">
        {{ p.firstName }}
      </li>
    </ul>
    <h3 v-else>No one found :(</h3>
  </section>
</template>

<script>
export default {
  name: "PeopleList",
  computed: {
    filteredPeople() {
      return this.$store.getters["people/people"];
    },
    hasPeople() {
      return this.$store.getters["people/hasPeople"];
    },
  },
};
</script>

<style scoped></style>
