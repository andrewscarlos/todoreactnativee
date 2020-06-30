import axios from 'axios'

const api = axios.create({
    baseURL:'https://damp-brushlands-24483.herokuapp.com'
});

export default api;