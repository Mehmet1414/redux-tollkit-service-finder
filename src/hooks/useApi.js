

import axios from "axios"

export const useApi = () => {
    const api = axios.create()
    api.defaults.headers["content-type"] = "application/json;charset=UTF-8 "
    api.defaults.baseURL = "https://api.adoptez1artisan.com"
    return (api)
}

