//newUserService.js
import axios from 'axios';

export function newUser(username, email, password) {
  return axios.post('http://localhost:3030/api/users/', {
    "username": username,
    "email": email,
    "password": password,
  },
  console.log('username', username, 'email', email, 'password', password),
  )
  .then(response => {
    console.log('api response', response);
    console.log('api response', response); 
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('username', response.data.user.username);
    return{
      token: response.data.token,
      username: response.data.user.username,
    } 
  })
  .catch(error => {
    console.error(error);
  });
}