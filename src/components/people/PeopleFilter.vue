<template>
  <base-card>
    <h2>Find Someone</h2>
    <span class="filter-option">
      <input type="checkbox" id="vegan" checked @change="setFilter"/>
      <label for="vegan">Vegan</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="vegetarian" checked @change="setFilter" />
      <label for="vegetarian">Vegetarian</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="milk" checked @change="setFilter" />
      <label for="milk">Milk</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="bread" checked @change="setFilter" />
      <label for="bread">Bread</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="sausages" checked @change="setFilter" />
      <label for="sausages">Sausages</label>
    </span>
  </base-card>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard";
export default {
  emits: ["change-filter"],
  name: "PeopleFilter",
  components: { BaseCard },
  data() {
    return {
      filters: {
        vegan: true,
        vegetarian: true,
        milk: true,
        bread: true,
        sausages: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
