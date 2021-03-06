<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>some more data here</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Want to have it? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="food in food" :key="food" :type="food" :title="food">
        <p>{{ desc }}</p>
      </base-badge>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard";
import BaseButton from "@/components/ui/BaseButton";
import BaseBadge from "@/components/ui/BaseBadge";
export default {
  name: "PeopleDetails",
  components: { BaseBadge, BaseButton, BaseCard },
  props: ["id"], // how? -> router!
  data() {
    return {
      selectedPeople: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedPeople.firstName + " " + this.selectedPeople.lastName;
    },
    food(){
      return this.selectedPeople.food;
    },
    desc(){
      return this.selectedPeople.desc;
    },
    contactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
  },
  created() {
    this.selectedPeople = this.$store.getters["people/people"].find(
      people => people.id === this.id
    );
  },
};
</script>

<style scoped></style>
