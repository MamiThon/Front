//createIngredientCategoryService.js

//cree une categorie d'ingredient

import axios from 'axios';

export function createIngredientCategory(name) {
  console.log(name);
    return axios.post('http://localhost:3030/api/categories/IngredientCategory/', {
    "name": name
  })
  .then(response => {
    console.log('api response', response);
    return{
      name: response.data.category.name,
    } 
  })
    .catch(error => {
        console.error(error);
    });
}