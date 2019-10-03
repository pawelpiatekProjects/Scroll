import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../utils/variables';

const Nav = styled.div`
width: 80%;
display: grid;
grid-template-columns: repeat(6,1fr);
align-items: center;
justify-items: center;
align-items: center;
padding-bottom: .5rem;
 text-align: left;
 margin: 1rem auto;
 border-bottom: 1px solid ${variables.secondaryGrey};
`;

const AddButton = styled.button`
  z-index: 1;
  padding: .5rem;
  width: 4.5rem;
  border: 1px solid ${variables.primaryGreen};
  border-radius: 2rem;
  color: ${variables.primaryGreen};
  background: ${variables.white};
 
  
  justify-self: center;
  
  transition: all .3s;
  &:hover,
  &:focus{
  outline: none;
  cursor: pointer;
  background: ${variables.primaryGreen} ;
  color: ${variables.white};
  }
  
`;

const notesNav = (props)=>{
    return(
        <Nav>
            <AddButton onClick={props.click}><FontAwesomeIcon icon={faPlus}/></AddButton>
        </Nav>
    )
};

export default notesNav;