<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: "BaseBadge",
  props: ["type", "title"],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.vegetarian {
  background-color: #229999;
  color: white;
}

.vegan {
  background-color: #278841;
  color: white;
}

.bread {
  background-color: #888800;
  color: white;
}

.sausages {
  background-color: #FF6666;
  color: white;
}

.milk {
  background-color: #773366;
  color: white;
}
</style>
