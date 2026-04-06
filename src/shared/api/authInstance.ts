import axios from 'axios'

const authApi = axios.create({
  baseURL: 'http://localhost:3002',
})

export default authApi
