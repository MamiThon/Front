<template>
    <div class="content-list">
        <div class="list-ingredient-category">
            <div class="ingredient" v-for="ingredient in ingredients" :key="ingredient.id">
                <p>{{ ingredient }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>

import { showAllIngredient } from '@/services/showAllIngredientService.js';

export default {
    name: "listAllIngredient",

    data() {
        return {
            ingredients: [],
        };
    },

    mounted() {
        try {
            this.ListIngredient();
        } catch (error) {
            console.error(error);
        }
    },


    methods: {

        ListIngredient() {
            showAllIngredient()
                .then((response) => {
                    this.ingredients = response.map(ingredient => ({
                        ingredientName: ingredient.name,
                        categoryName: ingredient.CategoryIngredient ? ingredient.CategoryIngredient.name : 'No category'
                    }));
                })
                .catch((error) => {
                    console.log(error);
                });
        },


    },
};
</script>
  
<style scoped></style>