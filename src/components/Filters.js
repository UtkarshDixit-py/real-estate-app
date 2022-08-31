import React from "react";
import styled from "styled-components";

const Filters = () => {

  const amenitiesList = [
    {
      id:1,
      name:'gym',
      label:'Gym'
    },
    {
      id:2,
      name:'park',
      label:'Park'
    },
    {
      id:3,
      name:'powerbackup',
      label:'Power Backup'
    }
  ]
  return (
    <Container>
      <Type>
        <p>Tenants preferred </p>
        <div class="ui form">
          <div class="inline fields">
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="frequency" checked="checked" />
                <label>Bachelors</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Family</label>
              </div>
            </div>
          </div>
        </div>
      </Type>
      <Amenities>
        <p>Amenities</p>
        {
          amenitiesList.map((item)=>{
            const {id ,name , label} = item;
            return(
              <div>
                <input type="checkbox" onChange={(e)=>console.log(id,e.target.checked)}/>
                <label>{label}</label>
              </div>
            )
          })
        }
      </Amenities>
      <Furnishing>
        <p>Furnishing</p>
        <div>
          <select class="ui search dropdown">
            <option value="UF">Unfurnished</option>
            <option value="SM">Semi furnished</option>
            <option value="FF">Full furnished</option>
          </select>
        </div>
      </Furnishing>
      <Apply>
        <button>Apply</button>
      </Apply>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid yellow;
  display: flex;
  justify-content: space-between;
`;

const Type = styled.div`
  border: 2px solid yellow;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Amenities = styled.div`
  border: 2px solid yellow;
  align-items: center;
  display: flex;
  flex-direction: column;

  label{
    margin: 5px;
  }
`;
const Furnishing = styled.div`
  border: 2px solid yellow;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;

  p {
    margin: 10px;
  }
`;
const Apply = styled.div`
  border: 2px solid yellow;
  display: flex;
  align-items: center;
`;

export default Filters;
