import React from 'react';
import styled from 'styled-components';

import Task from '../Task/Task';



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

const upcomingTask = (props) =>{
    //Logic to change
    //-------------------------
    const taskList = props.taskList;
    let upcomingTasks = [];
    for(let i=0;i<taskList.length;i++){
        const isInWeek = Math.round((  new Date(taskList[i].deadline)- new Date())/86400000)
        if(isInWeek > 0 && isInWeek<=7){
            upcomingTasks.push(taskList[i]);
        }
    }
    console.log(upcomingTasks)
    let list;

    if(upcomingTasks.length <=0){
        list = 'Nothing to do in this week';
    }else{
        list = upcomingTasks.map(task=>(
            <Task
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

export default upcomingTask;
