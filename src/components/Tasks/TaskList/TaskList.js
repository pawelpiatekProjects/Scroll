import React from 'react';
import styled from 'styled-components';

import Task from '../Task/Task';
import TaskNav from '../TasksNav/TasksNav';
import ImportantTask from "../ImportantTasks/ImportantTasks";

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
   
   p{
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

const Posts = styled.div`

`;

const taskList = (props)=>{

    const taskList = props.taskList;
    let tasks = [];
    for(let i=0;i<taskList.length;i++){

        if(!taskList[i].completed){
            tasks.push(taskList[i]);
        }
    }
    let list;

    if(tasks.length <=0){
        list = 'No important tasks';
    }else{
        list = tasks.map(task=>(
            <Task
                id={task._id}
                title = {task.title}
                deadline = {task.deadline.slice(0,10)}
                content = {task.content}
                important = {task.important}
                delete={props.delete}
                importantAdd={props.importantAdd}
            />
        ));
    }

  return(
      <TaskListWrapper>
          <TaskActions>
              <li>
                  <Cloud>
                      {tasks.length}
                  </Cloud>
                  <p>To Do</p>
              </li>
              <li><p>Notes</p></li>
          </TaskActions>
          <TaskNav click={props.click}/>
          <Posts>

              {list}
          </Posts>

      </TaskListWrapper>
  )
};

export default taskList;
