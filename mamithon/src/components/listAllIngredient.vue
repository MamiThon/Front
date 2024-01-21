<template>
    <div class="content-list">
        <h1>Les ingredients</h1>
        <div class="list-ingredient-category">
            <div class="ingredient" v-for="ingredient in ingredients" :key="ingredient.id">
                <p>{{ingredient.name}}</p>
            </div>
            <div class="category" v-for="category in categorys" :key="category.id">
                <p>{{category.name}}</p>
            </div>  
        </div>
    </div>
  </template>
  
  <script>
  
  import {showAllIngredient} from '@/services/showAllIngredientService.js';
  import {showCategoryIngredient} from '@/services/showCategoryIngredientService.js';

  export default {
    name: "listAllIngredient",

    data() {
      return {
        ingredients: [],
        categorys: [],
      };
    },


    methods: {

        ListIngredient () {
            showAllIngredient()
            .then((response) => {
                this.ingredients = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },  

        ListCategoryIngredient () {
            showCategoryIngredient()
            .then((response) => {
                this.categorys = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },


    },
  };
  </script>
  
  <style scoped>
  </style>