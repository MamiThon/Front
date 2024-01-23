//showCategoryIngredient.js

//recupere toutes les categories d'ingredients

import axios from 'axios';
// eslint-disable-next-line no-unused-vars
function showCategoryIngredient() {
    return axios.get('http://localhost:3030/api/IngredientCategory/')
        .then(
            response => {
                // console.log("resultatShowCategory",response.data);
                return response.data;
            })
        .catch(error => {
            console.error(error);
        });
}