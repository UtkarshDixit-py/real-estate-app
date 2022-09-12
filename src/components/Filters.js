import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPropertyList } from "../redux/actions/action";


const Filters = () => {
  const [amenities, setAmenities] = useState([
    {
      id: 1,
      name: "gym",
      label: "Gym",
    },
    {
      id: 2,
      name: "park",
      label: "Park",
    },
    {
      id: 3,
      name: "powerbackup",
      label: "Power Backup",
    },
  ]);

  const [tenantsPreferred, setTenantsPreferred] = useState([
    {
      id: 1,
      name:"bachelors",
      label: "Bachelors",
    },
    {
      id: 2,
      name:"family",
      label: "Family",
    },
  ]);

  const [furnishingType , selectedFurnishingType] = useState([
    {
      id:1,
      name:"semifurnished",
      label: "Semi Furnished"
    },
    {
      id:2,
      name:"fullfurnished",
      label: "Full Furnished"
    },
    {
      id:3,
      name:"unfurnished",
      label: "Un Furnished"
    },
  ])

  const dispatch = useDispatch();
  const collectedKeys = {
    selectedTenantsPreferred: "",
    selectedAmenities: [],
    selectedFurnishing: [],
  };

  // const [selectedAmenities,setSelectedAmenities] = useState([]);

  var onChecked = (item, isChecked) => {
    if (isChecked) {
      collectedKeys.selectedAmenities.push(item);
    } else {
      collectedKeys.selectedAmenities =
        collectedKeys.selectedAmenities.filter(
          (elem) => elem.id !== item.id
        );
    }
  };

  var onSelectTenantType = (item, isChecked) => {
    if (isChecked) {
      collectedKeys.selectedTenantsPreferred = item;
    }
    // console.log(collectedKeys.selectedTenantsPreferred);
  };

  var onFurnishSelect = (item,isChecked) =>{
    if (isChecked) {
      collectedKeys.selectedFurnishing.push(item);
    } else {
      collectedKeys.selectedFurnishing =
        collectedKeys.selectedFurnishing.filter(
          (elem) => elem.id !== item.id
        );
    }
  }

  return (
    <Container>
      <Type>
        <p>Tenants preferred </p>
        {tenantsPreferred.map((item) => {
          const { label } = item;
          return (
            <div class="ui form">
              <div class="inline fields">
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="frequency"
                      onChange={(e) => onSelectTenantType(item, e.target.checked)}
                    />
                    <label>{label}</label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Type>
      <Amenities>
        <p>Amenities</p>
        {amenities.map((item) => {
          const { id, name, label } = item;
          return (
            <div>
              <input
                type="checkbox"
                onChange={(e) => onChecked(item, e.target.checked)}
              />
              <label>{label}</label>
            </div>
          );
        })}
      </Amenities>
      <Furnishing>
        <p>Furnishing</p>
        <div>
          <div  onChange={onFurnishSelect}>
            {
              furnishingType.map((item)=>{
                const { label } = item;
                return (
                  <div>
              <input
                type="checkbox"
                onChange={(e) => onFurnishSelect(item, e.target.checked)}
              />
              <label>{label}</label>
            </div>
                );
              })
            }
          </div>
        </div>
      </Furnishing>
      <Apply>
        <button class="ui  black button" onClick={(e)=>dispatch(filterPropertyList(collectedKeys))}>Apply</button>
      </Apply>
    </Container>
  );
};

const Container = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Type = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Amenities = styled.div`
  /* border: 2px solid yellow; */
  align-items: center;
  display: flex;
  flex-direction: column;

  label {
    margin: 5px;
  }
`;
const Furnishing = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;

  p {
    margin: 10px;
  }
`;
const Apply = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  align-items: center;

`;

export default Filters;
