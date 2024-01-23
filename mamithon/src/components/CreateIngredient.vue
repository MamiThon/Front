<template>
  <div class="contentPopup">
    <h1>créé un ingrédient</h1>
    <form @submit.prevent="submitForm">
      <input
        type="text"
        name="name"
        id="name"
        v-model="name"
        placeholder="Nom"
      />
      <input
        type="text"
        name="id_categorie_ingredient"
        id="idIngredient"
        v-model="id_categorie_ingredient"
        placeholder="Categorie"
      />
      <button type="submit">cree</button>
    </form>
  </div>
</template>

<script>
import { createIngredient } from "@/services/createIngredientService";
import { getIdIngredientCategory } from "@/services/getIdCategoryIngredientService";

export default {
  name: "PopupCreateIngredient",
  data() {
    return {
      name: "",
      id_categorie_ingredient: "",
    };
  },

  methods: {
    submitForm() {
      this.VerifIdIngredientCategory();
    },

    async VerifIdIngredientCategory() {
    try {
      const category = await getIdIngredientCategory(this.id_categorie_ingredient);
      if (!category) {
        this.$router.push(`/create-category-ingredient`);
      } else {
        console.log("result get", getIdIngredientCategory(this.id_categorie_ingredient));
        this.functionCreateIngredient( category);
      }
    } catch (error) {
      console.error(error);
    }
  },

    functionCreateIngredient(id) {
      createIngredient(this.name, id).then(
        ({ name, id_categorie_ingredient }) => {
          console.log("juste apres le then", this.name);
          if (!this.name) {
            console.log("No name received");
            return;
          } else {
            console.log("Received name:", name);
            console.log(
              "Received id_categorie_ingredient:",
              id_categorie_ingredient
            );
            localStorage.setItem(
              "id_categorie_ingredient",
              id_categorie_ingredient
            );
            localStorage.setItem("name", this.name);
            this.$router.push(`/`);
          }
        }
      );
    },
  },
};
</script>

<style scoped></style>
