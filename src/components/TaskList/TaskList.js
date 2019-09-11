import React from 'react';
import styled from 'styled-components';


import TaskNav from '../../components/TasksNav/TasksNav';

const TaskListWrapper = styled.div`
  width: 80%;

`;

const TaskActions = styled.ul`

  list-style: none;
  text-align: left;
  width: 100%;
  border-bottom: 1px solid #eee;
   li{
   display: inline-block;
   margin: 1rem 3rem;
   font-size: 1.6rem;
   
  &:hover{
      color: #8EC06C;
      cursor: pointer;
    }
    &:active,
    &:focus{
      color: #8EC06C;
    }
   }
`;

const Posts = styled.div`

`;

const taskList = (props)=>{
  return(
      <TaskListWrapper>
          <TaskActions>
              <li>Tasks</li>
              <li>Notes</li>
          </TaskActions>
          <TaskNav click={props.click}/>
          <Posts>
              {props.taskList}
          </Posts>

      </TaskListWrapper>
  )
};

export default taskList;
