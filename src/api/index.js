import axios from 'axios'
import { API } from '../constants'

export const treeApi = axios.create({
    baseURL: API
})
