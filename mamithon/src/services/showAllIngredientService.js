//showAllIngredient.js

//recupere tous les ingredients

import axios from 'axios';

export function showAllIngredient() {
    return axios.get('http://localhost:3030//api/ingredients/')
        .then(
            response => {
                return response.data;
            })
        .catch(error => {
            console.error(error);
        });
}