
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
      
      const filterOne = state.List.filter((item)=>item.tenantsPreferred===selectedTenantsPreferred.name)
      const filterTwo = filterOne.filter((item)=>item.furnishing === selectedFurnishing.name)
      
      const filterLength = filterTwo.filter((item)=>item.amenities.length===selectedAmenities.length)
      const filterThree = filterLength

      console.log(filterTwo);
      //  var filter = false;
      //   if(typeof selectedTenantsPreferred!="undefined" ){
      //     if(selectedTenantsPreferred.name===item.tenantsPreferred){
      //       filter =true;
      //     }
          
        
      //)
      console.log(filterThree);

      return{
        ...state,
        filteredList : filterTwo
      }

    default:
      return state;
  }
};
