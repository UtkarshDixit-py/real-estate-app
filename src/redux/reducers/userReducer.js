
const initialState = {
  List: [],
  Favs: [],
  searchedList:[],
  filteredList:[]
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROPERTY":
      return {
        ...state,
        List: action.payload,
      };

    case "ADD_TO_FAV":
      let favourite = state.List.find((obj) => obj.id === action.payload);
      return {
        ...state,
        Favs: [...state.Favs, favourite],
      };

    case "REMOVE_FROM_FAV":
      return {
        ...state,
        Favs: state.Favs.filter((obj) => obj.id !== action.payload),
      };

    case "SEARCH" :
      return{
        ...state,
        searchedList : action.payload
      }

    case "FILTER" :
      console.log(action.payload);

      const {selectedTenantsPreferred ,selectedAmenities,selectedFurnishing} = action.payload;
      
      const newFilteredList = state.List.filter((item)=>selectedTenantsPreferred.name===item.tenantsPreferred)
        
      //  var filter = false;
      //   if(typeof selectedTenantsPreferred!="undefined" ){
      //     if(selectedTenantsPreferred.name===item.tenantsPreferred){
      //       filter =true;
      //     }
          
        
      //)
      console.log(newFilteredList);

      return{
        ...state,
      }

    default:
      return state;
  }
};
