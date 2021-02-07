import axios from 'axios';

axios.defaults.baseURL = process.env.baseUrl
axios.defaults.headers.common['x-api-key'] = process.env.apiKey;

export default axios;