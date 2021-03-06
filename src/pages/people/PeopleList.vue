<template>
  <section>
    <people-filter @change-filter="setFilters"></people-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isPeople" link to="/register">Register</base-button>
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
import PeopleFilter from "@/components/people/PeopleFilter";
export default {
  name: "PeopleList",
  components: { PeopleFilter, BaseButton, BaseCard, PeopleItem },
  data() {
    return {
      activeFilters: {
        vegan: true,
        vegetarian: true,
        bread: true,
        milk: true,
        sausages: true,
      },
    };
  },
  computed: {
    filteredPeople() {
      const people = this.$store.getters["people/people"];
      return people.filter(people => {
        if (this.activeFilters.vegan && people.food.includes("vegan"))
          return true;
        if (this.activeFilters.vegetarian && people.food.includes("vegetarian"))
          return true;
        if (this.activeFilters.bread && people.food.includes("bread"))
          return true;
        if (this.activeFilters.milk && people.food.includes("milk"))
          return true;
        if (this.activeFilters.sausages && people.food.includes("sausages"))
          return true;
        return false;
      });
    },
    hasPeople() {
      return this.$store.getters["people/hasPeople"];
    },
    isPeople() {
      return this.$store.getters["people/isPeople"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
