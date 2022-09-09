export const setProperty = (propertyList) => {
  return {
    type: "SET_PROPERTY",
    payload: propertyList,
  };
};

export const addToFav = (itemId) => {
  return {
    type: "ADD_TO_FAV",
    payload: itemId,
  };
};

export const removeFromFav = (itemId) => {
  return {
    type: "REMOVE_FROM_FAV",
    payload: itemId,
  };
};

export const searchPropertyList = (newList) =>{
  return{
    type:"SEARCH",
    payload:newList
  }
}

export const filterPropertyList = (filterObj) =>{
  return{
    type:"FILTER",
    payload:filterObj
  }
}

