import axios from 'axios';

const serverUrl ='http://localhost:5000';
// const serverUrl =  'https://database2021.herokuapp.com';


export const getRequest =(endpoint)=>{ // '/events'
    return axios.get(serverUrl+endpoint)
}

export const postRequest =(endpoint, payload)=>{
    return axios.post(serverUrl+endpoint, {...payload})
}

export const deleteRequest =(endpoint, idForDeleteItem )=>{
    return axios.delete(serverUrl+endpoint+'/'+idForDeleteItem)
}
export const updateRequest =(endpoint, payload)=>{
    return axios.put(serverUrl+endpoint,{...payload})
}