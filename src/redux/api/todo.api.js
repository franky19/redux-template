import { API } from "./middleware.api";

export const todoAPI = async()=>{
    return await API({
        method:'GET'
    }.then( res => res.data))
}