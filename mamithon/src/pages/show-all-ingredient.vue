<template>
  <div class="content-pages">
    <h1>Les ingredients</h1>
    <listAllIngredient />
  </div>
</template>

<script>
import listAllIngredient from "@/components/listAllIngredient.vue";

export default {
  name: "show-all-ingredient",
  components: {
    listAllIngredient,
  },
  methods: {},
};
</script>

<style scoped>
.content-pages {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>
