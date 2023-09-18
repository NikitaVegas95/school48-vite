import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const instance = axios.create({
    baseURL: 'http://localhost:7412/'
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default instance