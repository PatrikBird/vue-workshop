<template>
  <section>
    <base-card>
      <h2>Register now!</h2>
      <people-form @save-data="saveData"></people-form>
    </base-card>
  </section>
</template>

<script>
import PeopleForm from "@/components/people/PeopleForm";
import BaseCard from "@/components/ui/BaseCard";
export default {
  name: "PeopleRegistration",
  components: { BaseCard, PeopleForm },
  methods: {
    saveData(formData) {
      this.$store.dispatch("people/registerPeople", formData);
      this.$router.replace("/people"); // can't go back -> push can
    },
  },
};
</script>

<style scoped></style>
