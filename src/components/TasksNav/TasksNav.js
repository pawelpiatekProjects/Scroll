import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const Nav = styled.div`


display: grid;
grid-template-columns: repeat(6,1fr);
align-items: center;
justify-items: center;
align-items: center;
padding-bottom: .5rem;
 text-align: left;
 margin: 1rem;
 border-bottom: 1px solid #eee;

 

  
`;

const AddButton = styled.button`

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

const SortButton = styled.button`
  border: none;
  background: #fff;
  font-size: 1.4rem;
  padding: .5rem;
  position: relative;
  justify-self: center;
  
  &:hover,
  &:focus{
  outline: none;
  cursor: pointer;
  color: #8EC06C ;
  
  }
  
  &:hover:before{
  cursor: pointer;
  border-top: 10px solid #8EC06C;
  }
  
  
  &::before{
  content: '';
  display: inline-block;
  position: absolute;
  top: 1rem;
  left: 3.5rem;
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #000;
  }
`

const taskNav = (props)=>{
    return(
        <Nav>
            <AddButton onClick={props.click}><FontAwesomeIcon icon={faPlus}/></AddButton>
            <SortButton><p>Sort</p></SortButton>
        </Nav>
    )
};

export default taskNav;