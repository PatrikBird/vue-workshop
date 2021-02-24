<template>
  <section>
    FILTER
  </section>
  <section>
    <div class="controls">
      <router-link to="/register">Register</router-link>
    </div>
    <ul v-if="hasPeople">
      <people-item
        v-for="p in filteredPeople"
        :key="p.id"
        :id="p.id"
        :first-name="p.firstName"
        :last-name="p.lastName"
        :food="p.food"
      ></people-item>
    </ul>
    <h3 v-else>No one found :(</h3>
  </section>
</template>

<script>
import PeopleItem from "@/components/people/PeopleItem";
export default {
  name: "PeopleList",
  components: { PeopleItem },
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

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
