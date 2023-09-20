import axios from 'axios'

const instance:any = axios.create({
    baseURL: 'https://server-tan-seven.vercel.app/'
})

instance.interceptors.request.use((config: any) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default instance