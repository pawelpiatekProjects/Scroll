import React from 'react';
import styled from 'styled-components';
import CompletedTask from './CompletedTask/CompletedTask';
import EmptyInfo from '../../EmptyInfo/EmptyInfo';



const TaskListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

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

const completedTasks = (props) =>{

    const taskList = props.taskList;
    let completed = [];
    for(let i=0;i<taskList.length;i++){

        if(taskList[i].completed){
            completed.push(taskList[i]);
        }
    }
    let list;

    if(completed.length <=0){
        list = <EmptyInfo text='No completed tasks'/>;
    }else{
        list = completed.map(task=>(
            <CompletedTask
                id={task._id}
                title = {task.title}
                deadline = {task.deadline.slice(0,10)}
                content = {task.content}
                important = {task.important}
            />
        ));
    }
    return(
        <TaskListWrapper>
            <TaskActions>
                <li>Tasks</li>
                <li>Notes</li>
            </TaskActions>
            <Posts>
                {list}
            </Posts>
        </TaskListWrapper>
    )
};

export default completedTasks;
