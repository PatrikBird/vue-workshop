<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>Some Data n/a</h4>
    <div>
      <span v-for="kind in food" :key="kind">{{ kind }}</span>
    </div>
    <div class="actions">
      <router-link :to="peopleContactLink">Contact</router-link>
      <router-link :to="peopleDetailsLink">View Details</router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: "PeopleItem",
  props: ["id", "firstName", "lastName", "food"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    peopleContactLink() {
      return this.$route.path + "/" + this.id + "/contact" // /people/p1/contact
    },
    peopleDetailsLink() {
      return this.$route.path + "/" + this.id; // /people/p1
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
