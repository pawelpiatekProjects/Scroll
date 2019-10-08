import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import * as variables from '../../../utils/variables';

const TaskActions = styled.ul`
  z-index: 1;
  list-style: none;
  text-align: left;
  width: 100%;
  border-bottom: 1px solid ${variables.secondaryGrey};
  
  @media(max-width: 500px){
  text-align: center;
  }
   li{
   z-index: 1;
   display: inline-block;
   margin: 1rem 3rem;
   font-size: 2.5rem;
   
   a{
   text-decoration: none;
   color: ${variables.fontColorFirst};
   display: inline-block;
   &:hover{
      color: ${variables.primaryGreen};
      cursor: pointer;
    }
    &:active,
    &:focus{
      color: ${variables.primaryGreen};
    }
   }
  
   }
`;

const Cloud = styled.span`
display: inline-block;
margin-right: 1rem;
background: ${variables.secondaryGrey};
color: ${variables.primaryGreen};
font-size: 2rem;
padding: .2rem;
width: 4.25rem;
text-align: center;
border-radius: 2rem;
`;

const taskActions = (props)=>{
    return(
        <TaskActions>
            <li>
                <Cloud>
                    {props.tasks.length}
                </Cloud>
                <NavLink to="/dashboard/tasks">To Do</NavLink>
            </li>
            <li>
                <Cloud>
                    {props.notes.length}
                </Cloud>
                <NavLink to="/dashboard/notes">Notes</NavLink>
            </li>
        </TaskActions>
    )
}

export default taskActions;