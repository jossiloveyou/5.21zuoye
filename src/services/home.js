import { get, post } from '../utils/request'
import api from './api'

export const listuser = () => get(api.list)
export const adduser = option => get(api.add, option)
export const updateuser = option => get(api.update, option)
export const deleteuser = option => get(api.delete, option)
