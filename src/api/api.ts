import axios, { type AxiosResponse } from 'axios'
import type { PostResponse, Post } from '../types/types';

export const apiConfig = {
    getData(): Promise<AxiosResponse<PostResponse>> {
        return axios.get('https://dummyjson.com/posts')
    },
    getPost(id: string | number): Promise<AxiosResponse<Post>> {
        return axios.get(`https://dummyjson.com/posts/${id}`)
    },
    addData(data: any) {
        return axios.post('https://dummyjson.com/posts/add', data)
    },
    removeData(id: number) {
        return axios.delete(`https://dummyjson.com/posts/${id}`)
    }
}