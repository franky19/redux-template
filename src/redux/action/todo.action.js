import { todoAPI } from '../api/todo.api'
import * as types from '../type/todo.type'

export const getTodoAction=()=>{
    return async dispatch=>{
        try{
            dispatch({type:types.TODO_LOAD})
            const response = await todoAPI()
            dispatch({type:types.GET_TODO,todo:response.data})

        }catch(err){
            dispatch({type:types.TODO_FAILED,errMessage:err})
            console.error('[list todo]',err)
        }
    }
}