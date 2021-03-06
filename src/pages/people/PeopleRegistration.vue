<template>
  <section>
    <base-card>
      <h2>Register now!</h2>
      <people-form></people-form>
    </base-card>
  </section>
</template>

<script>
import PeopleForm from "@/components/people/PeopleForm";
import BaseCard from "@/components/ui/BaseCard";
export default {
  name: "PeopleRegistration",
  components: { BaseCard, PeopleForm },
};
</script>

<style scoped></style>
