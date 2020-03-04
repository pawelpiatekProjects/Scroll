import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../../utils/variables';

const Nav = styled.div`

width: 100%;
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

  padding: .5rem;
  width: 4rem;
 
  border: 1px solid ${variables.primaryGreen};
  border-radius: 2rem;
  color: ${variables.primaryGreen};
  background: ${variables.white};
 z-index: 1;
  
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

const SortButton = styled.button`
  border: none;
  background: ${variables.white};
  font-size: 1.8rem;
  padding: .5rem;
  position: relative;
  justify-self: center;
  
  @media(max-width: 400px){
    grid-column: 3/span 2;
  }
  
  
  &:hover,
  &:focus{
  outline: none;
  cursor: pointer;
  color: ${variables.primaryGreen} ;
  
  }
  
  p{
  display: inline-block;
  margin-right: .5rem;
  }
 
`

const taskNav = (props)=>{
    return(
        <Nav>
            <AddButton onClick={props.click}><FontAwesomeIcon icon={faPlus}/></AddButton>
            <SortButton><p>Sort</p><FontAwesomeIcon icon={faCaretDown}/></SortButton>
        </Nav>
    )
};

export default taskNav;