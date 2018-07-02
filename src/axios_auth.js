import axios from 'axios'

const instance = axios.create({
    baseUrl: 'http://localhost:8000/api'
})

export default instance