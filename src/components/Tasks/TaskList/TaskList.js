import React from 'react';
import styled from 'styled-components';

import Task from '../Task/Task';
import TaskNav from '../../Navigation/TasksNav/TasksNav';
import TaskActions from '../../Navigation/TaskActions/TaskActions';
import EmptyInfo from '../../EmptyInfo/EmptyInfo';
import Spinner from '../../UI/Spinner';

const TaskListWrapper = styled.div`
width: 80%;
margin: 0 auto;

@media (max-width: 1300px){
width: 100%;
}

`;



const Posts = styled.div`
width: 100%;
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
        list = <EmptyInfo text='No important tasks'/>;
    }else{
        if(props.loading){
            list = <Spinner/>
        }
        else{
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

    }

  return(
      <TaskListWrapper>
          <TaskActions tasks={tasks} notes={props.notesList}/>
          <TaskNav click={props.click}/>
          <Posts>
              {list}
          </Posts>


      </TaskListWrapper>
  )
};

export default taskList;
