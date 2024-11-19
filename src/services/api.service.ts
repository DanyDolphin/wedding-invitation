// Types
import { Guest } from '@/types'
import axios from 'axios'

export interface APIResponse {
  message: string
}

export interface GetAPIResponse {
  message: string
  data: any
}

export const updateGuest = async (guest: Guest): Promise<APIResponse> => {
  return axios
    .post<APIResponse>('/api', guest)
    .then((response) => response.data)
}

export const getGuest = async (name: string): Promise<GetAPIResponse> => {
  return axios
    .get<GetAPIResponse>('/api?name=' + name)
    .then((response) => response.data)
}
