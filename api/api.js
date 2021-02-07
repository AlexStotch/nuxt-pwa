import axios from '~/plugins/axios';  

export function fetchCatImageApi() {
    return axios.get('images/search', { params: { limit:1, size:"full" } } ) 
};