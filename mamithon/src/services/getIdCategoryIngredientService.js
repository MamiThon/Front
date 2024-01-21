//getIdCategoryIngredientService.js

//recupere l'id d'une categorie d'ingredient pour savoir si elle existe deja

import axios from 'axios';

export function getIdIngredientCategory(name) {
    return axios.get(`http://localhost:3030/api/categories/IngredientCategory/${name}`)
        .then(
            response => {
                if (response.data.id === undefined) {
                    return null;
                } else {
                    return response.data.id;
                }

            })
        .catch(error => {
            console.error(error);
        });
}