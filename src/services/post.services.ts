import { api } from "../services/app";

export async function getPosts(){
    try {
        const response = await api.get("/posts");

        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export async function getPostById(id: number){
    try {
        const response = await api.get(`/posts/${id}`); 
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}