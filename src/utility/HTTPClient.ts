import UserType from '../containers/interfaces';
const axios = require('axios');

export const saveUser = (data: UserType) => {
    axios.post('https://homework.nextbil.com/graphql', {
        query: `mutation signup($name: String!, $email: String!, $password: String!, $country: String!, $gender: String!) {
            signup(name: $name, email: $email, password: $password, gender: $gender, country: $country){
            name
            email
            password
            gender
            country
          }
        }`,
        variables: data
    }, {
          headers: {
            'Content-Type': 'application/json'
          }
    })
}