import React from 'react';
import styled from 'styled-components';

import TaskActions from '../../Navigation/TaskActions/TaskActions';
import ImportantTask from './ImportantTask/ImportantTask';
import EmptyInfo from '../../EmptyInfo/EmptyInfo';
import Spinner from '../../UI/Spinner';

const TaskListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

`;

const Posts = styled.div`

`;

const importantTasks = (props) =>{
    const taskList = props.taskList;
    let importantTasks = [];
    for(let i=0;i<taskList.length;i++){

        if(taskList[i].important){
            importantTasks.push(taskList[i]);
        }
    }
    console.log(importantTasks)
    let list;

    if(importantTasks.length <=0){
        list = <EmptyInfo text='No important tasks'/>;
    }else{
        list = importantTasks.map(task=>(
            <ImportantTask
                id={task._id}
                title = {task.title}
                deadline = {task.deadline.slice(0,10)}
                content = {task.content}
                important = {task.important}
                // delete = {this.onDeleteHandler}
                importantRemove = {props.importantRemove}
            />
        ));
    }
    return(
        <TaskListWrapper>
            <TaskActions tasks={importantTasks} notes={props.notesList}/>
            <Posts>
                {list}
            </Posts>
        </TaskListWrapper>
    )
};

export default importantTasks;
