import * as types from '../type/todo.type'


const initialState = {
    todo:{},
    isLoading: false,
    errMessage: null,
    isSuccessPost: false
}

const reducer = (state=initialState,action={})=>{
    switch (action.type){
        case types.GET_TODO:return{
            ...state,
            todo:action.todo,
            isLoading:false,
            errMessage:null,
        }
        // case types.ORDER_FAILED:return{
        //     ...state,
        //     isLoading:false,
        //     errMessage:action.errMessage
        // }
        // case types.ORDER_LOADING:return{
        //     ...state,
        //     isLoading:true,
        //     errMessage:null,
        //     isSuccessPost : false
        // }
        // case types.ORDER_POST_SUCCESS:return{
        //     ...state,
        //     isLoading:false,
        //     errMessage:null,
        //     isSuccessPost : true

        // }
        // case types.RESET_REDUCER_ORDER: return {
        //     ...state,
        //     isLoading:false,
        //     errMessage:null,
        //     isSuccessPost : false
        // }
        // case types.SET_DETAIL_ORDER: return {
        //     ...state,
        //     detailOrder: action.detailOrder ,
        //     isLoading:false,
        //     errMessage:null,
        // }
        default:return state
    }
}


export default reducer
