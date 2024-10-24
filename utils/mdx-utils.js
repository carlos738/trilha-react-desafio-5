import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    //const {data} = await api.get(`/post?id=eq.${id}`)
    try {
        const  { data } = await api.get(`/posts${id}`);// Supondo que o endpoint aceite o ID diretamente na URL

        if (data) {
            return data;
          
        }
    } catch (error) {
        console.error('Erro ao buscar o post: ',error);
    }
    return null;//retorna null caso não encontre o post ou ocorra um erro
};