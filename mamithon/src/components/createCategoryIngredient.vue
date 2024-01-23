<template>
  <div class="contentPopup">
    <h1>créé une catégorie d'ingrédient</h1>
    <form @submit.prevent="submitForm">
      <input
        type="text"
        name="name"
        id="name"
        v-model="name"
        placeholder="Nom"
      />
      <button type="submit">cree</button>
    </form>
  </div>
</template>

<script>
import { createIngredientCategory } from "@/services/createIngredientCategoryService";
import { getIdIngredientCategory } from "@/services/getIdCategoryIngredientService";

export default {
  name: "PopupCreateCategoryIngredient",
  data() {
    return {
      name: "",
    };
  },

  methods: {
    submitForm() {
      this.VerifIdIngredientCategory();
    },

    async VerifIdIngredientCategory() {
      try {
        const category = await getIdIngredientCategory(
          this.name 
        );
        if (!category) {
          this.functionCreateCategoryIngredient();
        } else {
          this.$router.push(`/`);
        }
      } catch (error) {
        console.error(error);
      }
    },

    functionCreateCategoryIngredient() {
      createIngredientCategory(this.name).then(({ name }) => {
        if (!name) {
          console.log("No name received");
          return;
        } else {
          console.log("Received name:", name);
          localStorage.setItem("name", name);
          this.$router.push(`/`);
        }
      });
    },
  },
};
</script>

<style scoped></style>
