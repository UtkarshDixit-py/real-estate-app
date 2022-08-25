const initialState ={
    List:[]
}

export const userReducer = (state = initialState,action)=>{
    switch(action.type){

        case "SET_PROPERTY" :
            return{
                ...state,
                List : action.payload
            }

        default:
            return state;
    }
}