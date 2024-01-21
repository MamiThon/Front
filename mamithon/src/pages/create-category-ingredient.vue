<template>
  <div class="content-pages">
    <h1>Cree une categorie d'ingredient</h1>
    <CreateCategoryIngredient />
  </div>
</template>

<script>
import CreateCategoryIngredient from '@/components/createCategoryIngredient.vue';

export default {
  name: "create-category-ingredient",
  components: {
    CreateCategoryIngredient

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
