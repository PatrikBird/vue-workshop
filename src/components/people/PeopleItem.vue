<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>Some Data n/a</h4>
    <div>
      <BaseBadge
        v-for="kind in food"
        :key="kind"
        :type="kind"
        :title="kind"
      ></BaseBadge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="peopleContactLink"
        >Contact</base-button
      >
      <base-button link :to="peopleDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";
import BaseBadge from "@/components/ui/BaseBadge";
export default {
  name: "PeopleItem",
  components: { BaseBadge, BaseButton },
  props: ["id", "firstName", "lastName", "food"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    peopleContactLink() {
      return this.$route.path + "/" + this.id + "/contact"; // /people/p1/contact
    },
    peopleDetailsLink() {
      return this.$route.path + "/" + this.id; // /people/p1
    },
  },
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
