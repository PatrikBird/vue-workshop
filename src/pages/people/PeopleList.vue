<template>
  <section>
    FILTER
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register</base-button>
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
    </base-card>
  </section>
</template>

<script>
import PeopleItem from "@/components/people/PeopleItem";
import BaseCard from "@/components/ui/BaseCard";
import BaseButton from "@/components/ui/BaseButton";
export default {
  name: "PeopleList",
  components: {BaseButton, BaseCard, PeopleItem },
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
