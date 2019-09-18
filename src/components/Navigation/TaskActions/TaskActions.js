import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import task from "../../Tasks/Task/Task";

const TaskActions = styled.ul`

  list-style: none;
  text-align: left;
  width: 100%;
  border-bottom: 1px solid #eee;
   li{
   display: inline-block;
   margin: 1rem 3rem;
   font-size: 1.6rem;
   
   a{
   text-decoration: none;
   color: #000;
   display: inline-block;
   &:hover{
      color: #8EC06C;
      cursor: pointer;
    }
    &:active,
    &:focus{
      color: #8EC06C;
    }
   }
  
   }
`;

const Cloud = styled.span`
display: inline-block;
margin-right: 1rem;
background: #eee;
color: #8EC06C;
font-size: 1.2rem;
padding: .2rem;
width: 2.75rem;
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