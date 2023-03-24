import axios from 'axios';

export default axios.create({
    // baseURL: 'https://festivals-api.vercel.app/api'
    baseURL: 'http://localhost:4000/api'
}); 