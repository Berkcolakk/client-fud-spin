

// Refactored code: 
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const instance = axios.create({
    baseURL:process.env.NEXT_PUBLIC_HOST
})

const api = (axios: AxiosInstance) => {
    return {
        get: async (url: string, config: AxiosRequestConfig = {}) => await axios.get(url, config),  // changed to single line for readability 
        post: (url: string, body: unknown, config: AxiosRequestConfig = {}) => axios.post(url, body, config), // changed to single line for readability 
        delete: (url: string, config: AxiosRequestConfig = {}) => axios.delete(url, config), // changed to single line for readability 
        put: (url: string, body: unknown, config: AxiosRequestConfig = {}) => axios.put(url, body, config), // changed post to put as per the function name 
        patch: (url: string, body: unknown, config: AxiosRequestConfig = {}) => axios.patch(url, body, config) // changed to single line for readability 

    }
}
export default api(instance);