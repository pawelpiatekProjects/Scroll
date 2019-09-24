import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

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
 border-bottom: 1px solid #eee;
`;

const AddButton = styled.button`
  z-index: 1;
  padding: .5rem;
  width: 3rem;
  border: 1px solid #8EC06C;
  border-radius: 2rem;
  color: #8EC06C;;
  background: #ffffff;
 
  
  justify-self: center;
  
  transition: all .3s;
  &:hover,
  &:focus{
  outline: none;
  cursor: pointer;
  background: #8EC06C ;
  color: #fff;
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