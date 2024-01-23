//createIngredientService.js

import axios from 'axios';

export function createIngredient(name, idCategory) {
  console.log(name, idCategory);
    return axios.post('http://localhost:3030/api/ingredients/', {
    "name": name,
    "id_categorie_ingredient": idCategory,
  })
  .then(response => {
    console.log("reponse api",response);
    return{
      name: response.data.name,
      id_categorie_ingredient: response.data.id,
    } 
  })
    .catch(error => {
        console.error(error);
    });
}