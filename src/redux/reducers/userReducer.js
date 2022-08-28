import Fav from "../../components/Fav"

const initialState ={
    List:[],
    Favs:[]
}

export const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case "SET_PROPERTY" :
            return{
                ...state,
                List : action.payload
            }

        case "ADD_TO_FAV" :
            let favourite = state.List.find(obj => obj.id === action.payload)
            return{
                ...state,
                Favs: [...state.Favs, favourite]
            }

        case "REMOVE_FROM_FAV" :
            return{
                ...state,
                Favs : state.Favs.filter((obj)=>obj.id !== action.payload)
            }

        default:
            return state;
    }
}