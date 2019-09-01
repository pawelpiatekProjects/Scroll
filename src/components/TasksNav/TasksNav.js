import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
 text-align: left;
 padding: 1rem;
 

  button{
  padding: .5rem;
  width: 10rem;
  background: #eee;
  border: none;
  color: orangered;
  
  &:hover{
  cursor: pointer;
  }
  
  }
`;

const taskNav = (props)=>{
    return(
        <Nav>
            <button onClick={props.click}>Add New Task</button>
        </Nav>
    )
};

export default taskNav;