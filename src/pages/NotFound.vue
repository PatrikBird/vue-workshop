<template>
  <div>
    <base-card>
      <h2>Page not found</h2>
      <p>Please check out <router-link to="/people">People</router-link>.</p>
    </base-card>
  </div>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard";
export default {
  name: "NotFound",
  components: {BaseCard},
};
</script>

<style scoped></style>
