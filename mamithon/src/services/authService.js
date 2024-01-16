// authService.js
import axios from 'axios';

export function login(email, password) {
  return axios.get('http://localhost:3030/api/users/', {
    "email" : email,
    "password" : password,
  })
  .then(response => {
    console.log('api response', response); 
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('username', response.data.name);

    return{
      token: response.data.token,
      username: response.data.username,
    } 
  })
  .catch(error => {
    console.error(error);
  });
}