import axios from "axios";


export const authApi = axios.create({
    baseURL: 'https://validator.movilpay.app',
    
})