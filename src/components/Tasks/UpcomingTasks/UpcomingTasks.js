import React from 'react';
import styled from 'styled-components';

import Task from '../Task/Task';
import EmptyInfo from '../../EmptyInfo/EmptyInfo';
import TaskActions from '../../Navigation/TaskActions/TaskActions';



const TaskListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

`;



const Posts = styled.div`

`;

const upcomingTask = (props) =>{

    const taskList = props.taskList;
    let upcomingTasks = [];
    for(let i=0;i<taskList.length;i++){
        const isInWeek = Math.round((  new Date(taskList[i].deadline)- new Date())/86400000)
        if(isInWeek > 0 && isInWeek<=7 && !taskList[i].completed){
            upcomingTasks.push(taskList[i]);
        }
    }
    console.log(upcomingTasks)
    let list;

    if(upcomingTasks.length <=0){
        list = <EmptyInfo text='Nothing to do in this week'/>;
    }else{
        list = upcomingTasks.map(task=>(
            <Task
                id={task._id}
                title = {task.title}
                deadline = {task.deadline.slice(0,10)}
                content = {task.content}
                important = {task.important}
                delete = {props.delete}
                importantAdd = {props.importantAdd}
            />
        ));
    }

    return(
        <TaskListWrapper>
            <TaskActions tasks={upcomingTasks} notes={props.notesList}/>
            <Posts>
                {list}
            </Posts>
        </TaskListWrapper>
    )
};

export default upcomingTask;
