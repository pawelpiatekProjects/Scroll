import React from 'react';
import styled from 'styled-components';



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
    // const taskList = props.taskList;
    // let importantTasks = [];
    // for(let i=0;i<taskList.length;i++){
    //
    //     if(taskList[i].important){
    //         importantTasks.push(taskList[i]);
    //     }
    // }
    // console.log(importantTasks)
    // let list;
    //
    // if(importantTasks.length <=0){
    //     list = 'No important tasks';
    // }else{
    //     list = importantTasks.map(task=>(
    //         <ImportantTask
    //             id={task._id}
    //             title = {task.title}
    //             deadline = {task.deadline.slice(0,10)}
    //             content = {task.content}
    //             important = {task.important}
    //             // delete = {this.onDeleteHandler}
    //             importantRemove = {props.importantRemove}
    //         />
    //     ));
    // }
    return(
        <TaskListWrapper>
            <TaskActions>
                <li>Tasks</li>
                <li>Notes</li>
            </TaskActions>
            <Posts>
                Upcoming Tasks
            </Posts>
        </TaskListWrapper>
    )
};

export default upcomingTask;
