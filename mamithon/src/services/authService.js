// authService.js
import axios from 'axios';

export function login(email, password) {
  return axios.post('http://localhost:3030/api/users/login', {
    "email" : email,
    "password" : password,
  })
  .then(response => {
    console.log('api response', response); 
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('username', response.data.user.username);

    return{
      token: response.data.token,
      username: response.data.username,
    } 
  })
  .catch(error => {
    console.error(error);
  });
}