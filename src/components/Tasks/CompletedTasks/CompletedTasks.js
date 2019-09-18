import React from 'react';
import styled from 'styled-components';
import CompletedTask from './CompletedTask/CompletedTask';
import EmptyInfo from '../../EmptyInfo/EmptyInfo';
import TaskActions from '../../Navigation/TaskActions/TaskActions';



const TaskListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

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
            <TaskActions tasks={completed} notes={props.notesList}/>
            <Posts>
                {list}
            </Posts>
        </TaskListWrapper>
    )
};

export default completedTasks;
