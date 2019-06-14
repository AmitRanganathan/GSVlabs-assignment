/**
 * Set up a connector to hit the backend
 */

 import axios from 'axios'

 // will return a connector
 export default () => {
    // create an axios object which will point to our backend url of 8082
    return axios.create({
        baseURL: 'http://localhost:8082/'
    })
 }